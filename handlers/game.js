const crypto=require("crypto");
const users=require("../database/users");
const games=require("../database/games");
const groups=require("../database/groups");
const config=require("../config");
const botRights=require("../services/botRights");
const cloneActivity=require("../services/cloneActivity");
const db=require("../database");
function register({bot,cloneId=0}) {
  bot.on("message",async msg=>{
    if(!msg.text)return;
    const text=msg.text.trim();
    const joinMatch=text.match(/^\/start\s+join_(-?\d+)$/);
    const gameMatch=text.match(/^\/start\s+game_(-?\d+)$/);
    if(gameMatch&&msg.chat.type==="private"){
      if(msg.from.id===1087968824) return;
      const chatId=Number(gameMatch[1]);
      await users.upsert(msg.from);
      const existing=await games.getActiveByChat(chatId);
      if(existing) return bot.sendMessage(msg.chat.id,"⏳ Bu guruhda allaqachon faol lobby mavjud.");
      await groups.upsert(chatId,"");
      try{
        const r=await botRights.check(bot,chatId);
        if(!r.ok) return bot.sendMessage(msg.chat.id,"❌ Bot guruhda yetarli huquqlarga ega emas.");
        const id=crypto.randomUUID(); await games.create(id,chatId); await games.addPlayer(id,msg.from.id);
        const name=(msg.from.username&&msg.from.username!=="GroupAnonymousBot")?"@"+msg.from.username:(msg.from.first_name||"O'yinchi");
        await bot.sendMessage(msg.chat.id,"✅  Lobby yaratildi! Guruhga qarang.");
        const txt=`🎭  MAFIA LOBBY\n━━━━━━━━━━━━━━━━━━\n👥  1/${config.maxPlayers}\n━━━━━━━━━━━━━━━━━━\n  1. ${name}\n━━━━━━━━━━━━━━━━━━`;
        const btn=`https://t.me/topmafia_uzbot?start=join_${chatId}`;
        try{await bot.sendMessage(chatId,txt,{reply_markup:{inline_keyboard:[[{"text":"🎯  QO'SHILISH","url":btn}]]}});}catch(_){}
      }catch(e){return bot.sendMessage(msg.chat.id,"❌ Xatolik.");}
      return;
    }
    if(joinMatch&&msg.chat.type==="private"){
      if(msg.from.id===1087968824) return;
      const chatId=Number(joinMatch[1]);
      await users.upsert(msg.from);
      const g=await getActive(chatId);
      if(!g) return bot.sendMessage(msg.chat.id,"❌ O'yin tugagan yoki mavjud emas.");
      const existing=await games.players(g.id);
      if(existing.find(p=>p.id===msg.from.id)) return bot.sendMessage(msg.chat.id,"✅ Siz allaqachon o'yinga qo'shilgansiz!");
      await games.addPlayer(g.id,msg.from.id);
      await bot.sendMessage(msg.chat.id,"✅  O'YINGA QO'SHILDINGIZ!\n━━━━━━━━━━━━━━━━━━\n🎭  Mafia o'yini boshlanishini kuting.\n━━━━━━━━━━━━━━━━━━");
      const players=await games.players(g.id);
      const playerList=players.map((u,i)=>{const n=(u.username&&u.username!=="GroupAnonymousBot")?"@"+u.username:(u.first_name||"O'yinchi");return `  ${i+1}. ${n}`;}).join("\n");
      const txt=`🎭  MAFIA LOBBY\n━━━━━━━━━━━━━━━━━━\n👥  ${players.length}/${config.maxPlayers}\n━━━━━━━━━━━━━━━━━━\n${playerList}\n━━━━━━━━━━━━━━━━━━`;
      const btn=`https://t.me/topmafia_uzbot?start=join_${chatId}`;
      try{await bot.sendMessage(chatId,txt,{reply_markup:{inline_keyboard:[[{"text":`👥  ${players.length} o'yinchi`,callback_data:"noop"}],[{"text":"🎯  QO'SHILISH","url":btn}]]}});}catch(_){}
      return;
    }
  });
  async function createGame(msg){
    await users.upsert(msg.from);
    if(msg.chat.type==="private") return bot.sendMessage(msg.chat.id,"🎭 Mafia o'yini faqat guruhlarda ishlaydi!");
    if(msg.from.id===1087968824) return;
    await groups.upsert(msg.chat.id,msg.chat.title);
    try{
      const r=await botRights.check(bot,msg.chat.id);
      await botRights.audit(msg.chat.id,null,r);
      if(!r.ok) return bot.sendMessage(msg.chat.id,botRights.text(r));
      const existing=await games.getActiveByChat(msg.chat.id);
      if(existing) return bot.sendMessage(msg.chat.id,"⏳ Faol lobby mavjud.");
      const id=crypto.randomUUID(); await games.create(id,msg.chat.id); await games.addPlayer(id,msg.from.id); cloneActivity.track(cloneId,"game_start",msg);
      const name=(msg.from.username&&msg.from.username!=="GroupAnonymousBot")?"@"+msg.from.username:(msg.from.first_name||"O'yinchi");
      const txt=`🎭  MAFIA LOBBY\n━━━━━━━━━━━━━━━━━━\n👥  1/${config.maxPlayers}\n━━━━━━━━━━━━━━━━━━\n  1. ${name}\n━━━━━━━━━━━━━━━━━━`;
      const btn=`https://t.me/topmafia_uzbot?start=join_${msg.chat.id}`;
      return bot.sendMessage(msg.chat.id,txt,{reply_markup:{inline_keyboard:[[{"text":"🎯  QO'SHILISH","url":btn}]]}});
    }catch(e){return bot.sendMessage(msg.chat.id,"❌ Xatolik.");}
  }
  async function stopGame(msg){
    if(msg.chat.type==="private") return;
    const g=await getActive(msg.chat.id);
    if(!g) return bot.sendMessage(msg.chat.id,"❌ Faol o'yin yo'q.");
    try{await games.update(g.id,{state:"ended",phase:"ended"});}catch(_){}
    return bot.sendMessage(msg.chat.id,"🛑  O'yin to'xtatildi!");
  }
  async function showTop(msg){
    if(msg.chat.type==="private") return;
    let top=[];
    try{top=await db.prepare(`
      SELECT u.id,u.first_name,u.username,u.wins,u.level,u.xp,u.games
      FROM users u
      INNER JOIN game_players gp ON gp.user_id=u.id
      INNER JOIN games g ON g.id=gp.game_id AND g.chat_id=?
      GROUP BY u.id
      ORDER BY u.wins DESC,u.xp DESC LIMIT 10
    `).all(msg.chat.id);}catch(e){}
    if(!top.length) return bot.sendMessage(msg.chat.id,"🏆 Hali reyting yo'q.");
    const lines=top.filter(u=>u.username!=="GroupAnonymousBot").map((u,i)=>{
      const medal=i===0?"🥇":i===1?"🥈":i===2?"🥉":`${i+1}.`;
      const name=(u.username&&u.username!=="GroupAnonymousBot")?"@"+u.username:(u.first_name||"O'yinchi");
      return `  ${medal} ${name}\n      💰 ${u.wins||0} g'alaba  ·  ⭐ Lv.${u.level||1}`;
    }).join("\n\n");
    if(!lines) return bot.sendMessage(msg.chat.id,"🏆 Hali reyting yo'q.");
    return bot.sendMessage(msg.chat.id,`🏆  TOP O'YINCHILAR\n━━━━━━━━━━━━━━━━━━\n${lines}\n━━━━━━━━━━━━━━━━━━`);
  }
  bot.onText(/^\/game(?:@\S+)?$/,msg=>createGame(msg));
  bot.onText(/^\/mafia(?:@\S+)?$/,msg=>createGame(msg));
  bot.onText(/^\/top(?:@\S+)?$/,msg=>showTop(msg));
  bot.onText(/^\/stop(?:@\S+)?$/,msg=>stopGame(msg));
  bot.onText(/^\/end(?:@\S+)?$/,msg=>stopGame(msg));
}
async function getActive(chatId){return await games.getActiveByChat(chatId);}
async function join(chatId,userId){const g=await getActive(chatId);if(!g)return null; await users.upsert({id:userId}); await games.addPlayer(g.id,userId); return games.players(g.id);}
module.exports={register,getActive,join};
