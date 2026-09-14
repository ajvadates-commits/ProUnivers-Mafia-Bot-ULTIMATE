const crypto=require("crypto");
const users=require("../database/users");
const games=require("../database/games");
const {cardText}=require("./roles");
const groups=require("../database/groups");
const config=require("../config");
const botRights=require("../services/botRights");
const cloneActivity=require("../services/cloneActivity");
const db=require("../database");
const monetization=require("../services/monetization");
const groupSettings=new Map();
function isAdmin(msg){
  return["creator","administrator"].includes(msg.chat_member?.status)||["creator","administrator"].includes(msg.from?.chat_member_status);
}
async function checkAdmin(bot,msg){
  try{
    const m=await bot.getChatMember(msg.chat.id,msg.from.id);
    return["creator","administrator"].includes(m.status);
  }catch(_){return false;}
}
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
  async function renderLobby(bot,chatId,g){
    const players=await games.players(g.id);
    const rows=players.map((p,i)=>`  ${i+1}. ${p.username&&p.username!=="GroupAnonymousBot"?"@"+p.username:(p.first_name||"O'yinchi")}`).join("\n");
    const txt=`🎭  MAFIA LOBBY — DAVOM\n━━━━━━━━━━━━━━━━━━\n👥  ${players.length}/${config.maxPlayers}\n━━━━━━━━━━━━━━━━━━\n${rows}\n━━━━━━━━━━━━━━━━━━`;
    const btn=`https://t.me/topmafia_uzbot?start=join_${chatId}`;
    return bot.sendMessage(chatId,txt,{reply_markup:{inline_keyboard:[[{"text":"🎯  QO'SHILISH","url":btn}]]}});
  }
  async function createGame(msg){
    const dup=await games.getActiveByChat(msg.chat.id);
    if(dup&&dup.state==="lobby") return renderLobby(bot,msg.chat.id,dup);
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
      const sent=await bot.sendMessage(msg.chat.id,txt,{reply_markup:{inline_keyboard:[[{"text":"🎯  Qo'shilish","url":btn}]]}});
      try{await bot.pinChatMessage(msg.chat.id,sent.message_id,{disable_notification:true});}catch(_){}
      const {start:startLobby}=require("../services/lobbyTimer");
      const roles=require("../services/gameRoles");
      const startMs=config.countdownMs||120000;
      startLobby(g.id,async()=>{
        const cur=await getActive(msg.chat.id);
        if(!cur||cur.id!==g.id||cur.state!=="lobby") return;
        const pl=await games.players(g.id);
        if(pl.length<config.minPlayers){
          await games.endAllByChat(msg.chat.id);
          return bot.sendMessage(msg.chat.id,`❌ Yetarli o'yinchi yo'q (${pl.length}/${config.minPlayers}). Lobby yopildi.`);
        }
        const assigned=roles.assign(g.id,pl.map(p=>p.user_id));
        for(const a of assigned){
          await games.setRole(g.id,a.user_id,a.roleId);
          const card=cardText(a.roleId);
          if(card) try{await bot.sendMessage(a.user_id,`🎭  SIZNING ROLINGIZ\n━━━━━━━━━━━━━━━━━━\n${card}`);}catch(_){}
        }
        await games.update(g.id,{state:"running",phase:"night"});
        return bot.sendMessage(msg.chat.id,`🎭  O'YIN AVTOMATIK BOSHLANDI!\n━━━━━━━━━━━━━━━━━━\n👥  ${pl.length} o'yinchi\n🎭  Har biriga rol PM'da yuborildi.\n━━━━━━━━━━━━━━━━━━`);
      },startMs);
      return sent;
    }catch(e){return bot.sendMessage(msg.chat.id,"❌ Xatolik.");}
  }
  async function stopGame(msg){
    if(msg.chat.type==="private") return;
    if(!await checkAdmin(bot,msg)) return bot.sendMessage(msg.chat.id,"❌ Faqat admin o'yni to'xtata oladi.");
    const g=await getActive(msg.chat.id);
    if(!g) return bot.sendMessage(msg.chat.id,"❌ Faol o'yin yo'q.");
    try{await games.endAllByChat(msg.chat.id);}catch(_){}
    return bot.sendMessage(msg.chat.id,"🛑  O'yin to'xtatildi!");
  }
  async function extendGame(msg){
    if(msg.chat.type==="private") return;
    if(!await checkAdmin(bot,msg)) return bot.sendMessage(msg.chat.id,"❌ Faqat admin vaqtni uzaytira oladi.");
    const g=await getActive(msg.chat.id);
    if(!g) return bot.sendMessage(msg.chat.id,"❌ Faol o'yin yo'q.");
    if(g.state!=="lobby") return bot.sendMessage(msg.chat.id,"❌ Faqat lobby paytida uzaytirish mumkin.");
    return bot.sendMessage(msg.chat.id,"⏰  Ro'yxatdan o'tish vaqti 60 soniya uzaytirildi!");
  }
  async function utagGame(msg){
    if(msg.chat.type==="private") return;
    if(!await checkAdmin(bot,msg)) return bot.sendMessage(msg.chat.id,"❌ Faqat admin chaqira oladi.");
    const g=await getActive(msg.chat.id);
    if(!g) return bot.sendMessage(msg.chat.id,"❌ Faol o'yin yo'q.");
    const players=await games.players(g.id);
    if(!players.length) return bot.sendMessage(msg.chat.id,"❌ Hali hech kim qo'shilmagan.");
    const mentions=players.map(p=>{
      const n=(p.username&&p.username!=="GroupAnonymousBot")?"@"+p.username:(p.first_name||"O'yinchi");
      return `<a href="tg://user?id=${p.id}">${n}</a>`;
    }).join(", ");
    return bot.sendMessage(msg.chat.id,`📢  O'YINCHA CHAQRILDI!\n━━━━━━━━━━━━━━━━━━\n${mentions}\n━━━━━━━━━━━━━━━━━━\nO'yin tez orada boshlanadi!`,{parse_mode:"HTML"});
  }
  async function kickPlayer(msg){
    if(msg.chat.type==="private") return;
    if(!await checkAdmin(bot,msg)) return bot.sendMessage(msg.chat.id,"❌ Faqat admin o'yinchini chiqara oladi.");
    const g=await getActive(msg.chat.id);
    if(!g) return bot.sendMessage(msg.chat.id,"❌ Faol o'yin yo'q.");
    const reply=msg.reply_to_message;
    if(!reply) return bot.sendMessage(msg.chat.id,"❌ O'yinchini kick qilish uchun unga reply bosing.\nFormat: /kick (reply)");
    const userId=reply.from.id;
    const players=await games.players(g.id);
    const player=players.find(p=>p.id===userId);
    if(!player) return bot.sendMessage(msg.chat.id,"❌ Bu foydalanuvchi o'yinda emas.");
    await db.prepare("DELETE FROM game_players WHERE game_id=? AND user_id=?").run(g.id,userId);
    const name=(reply.from.username&&reply.from.username!=="GroupAnonymousBot")?"@"+reply.from.username:(reply.from.first_name||"O'yinchi");
    return bot.sendMessage(msg.chat.id,`🚪  ${name} o'yindan chiqarildi.`);
  }
  async function leaveGame(msg){
    if(msg.chat.type==="private") return bot.sendMessage(msg.chat.id,"❌ Bu buyruq faqat guruhlarda ishlaydi.");
    const g=await getActive(msg.chat.id);
    if(!g) return bot.sendMessage(msg.chat.id,"❌ Faol o'yin yo'q.");
    const ent=await monetization.get(msg.from.id);
    if(!ent.vip&&!ent.pro) return bot.sendMessage(msg.chat.id,"❌ Faqat Premium (VIP/PRO) o'yinchilar o'yindan chiqishi mumkin.");
    const players=await games.players(g.id);
    const player=players.find(p=>p.id===msg.from.id);
    if(!player) return bot.sendMessage(msg.chat.id,"❌ Siz o'yinda emassiz.");
    await db.prepare("DELETE FROM game_players WHERE game_id=? AND user_id=?").run(g.id,msg.from.id);
    return bot.sendMessage(msg.chat.id,"✅  O'yindan chiqdingiz.");
  }
  async function showTop(msg){
    if(msg.chat.type==="private") return bot.sendMessage(msg.chat.id,"❌ Bu buyruq faqat guruhlarda ishlaydi.");
    const g=await getActive(msg.chat.id);
    const base={id:0,username:"",first_name:"Ma'lumot yo'q",wins:0,level:1,coins:0};
    let rows=[];
    if(g){
      try{rows=await db.prepare(`
        SELECT u.id,u.username,u.first_name,u.wins,u.level,u.coins,
          (SELECT COUNT(*) FROM game_players gp WHERE gp.game_id=?) AS in_game
        FROM game_players gp
        JOIN games gg ON gg.id=gp.game_id AND gg.chat_id=?
        JOIN users u ON u.id=gp.user_id
        GROUP BY u.id ORDER BY u.wins DESC,u.level DESC LIMIT 10
      `).all(g.id,msg.chat.id);}catch(_){}
    }else{
      try{rows=await db.prepare("SELECT u.id,u.username,u.first_name,u.wins,u.level,u.coins FROM users u ORDER BY u.wins DESC,u.level DESC LIMIT 10").all();}catch(_){}
    }
    if(!rows.length) return bot.sendMessage(msg.chat.id,"🏆  Hali reyting yo'q.");
    const lines=rows.map((u,i)=>{
      const medal=i===0?"🥇":i===1?"🥈":i===2?"🥉":` ${i+1}.`;
      const name=(u.username&&u.username!=="GroupAnonymousBot")?"@"+u.username:(u.first_name||"O'yinchi");
      return `  ${medal} ${name}\n      🏆 ${u.wins||0} g'alaba · ⭐ Lv.${u.level||1}`;
    }).join("\n\n");
    return bot.sendMessage(msg.chat.id,`🏆  GURUH TOP 10\n━━━━━━━━━━━━━━━━━━\n${lines}\n━━━━━━━━━━━━━━━━━━`);
  }
  async function myRole(msg){
    if(msg.chat.type==="private") return bot.sendMessage(msg.chat.id,"❌ Bu buyruq faqat guruhlarda ishlaydi.");
    const g=await getActive(msg.chat.id);
    if(!g) return bot.sendMessage(msg.chat.id,"❌ Faol o'yin yo'q.");
    if(g.state!=="running") return bot.sendMessage(msg.chat.id,"❌ O'yin hali boshlanmagan.");
    const players=await games.players(g.id);
    const player=players.find(p=>p.id===msg.from.id);
    if(!player) return bot.sendMessage(msg.chat.id,"❌ Siz bu o'yinda emassiz.");
    if(!player.role) return bot.sendMessage(msg.chat.id,"⏳ Rolingiz hali aniqlanmagan.");
    const card=cardText(player.role);
    if(!card) return bot.sendMessage(msg.chat.id,"⏳ Rolingiz hali aniqlanmagan.");
    return bot.sendMessage(msg.chat.id,card);
  }
  async function settings(msg){
    if(msg.chat.type==="private") return bot.sendMessage(msg.chat.id,"❌ Bu buyruq faqat guruhlarda ishlaydi.");
    if(!await checkAdmin(bot,msg)) return bot.sendMessage(msg.chat.id,"❌ Faqat admin sozlamalarni o'zgartira oladi.");
    const chatId=msg.chat.id;
    const s=groupSettings.get(chatId)||{minPlayers:config.minPlayers,maxPlayers:config.maxPlayers,language:"uz"};
    const args=msg.text.split(/\s+/).slice(1);
    if(!args.length){
      return bot.sendMessage(msg.chat.id,`⚙️  GURUH SOZLAMALARI\n━━━━━━━━━━━━━━━━━━\n👥 Minimal o'yinchi: ${s.minPlayers}\n👥 Maximal o'yinchi: ${s.maxPlayers}\n🌐 Til: ${s.language}\n━━━━━━━━━━━━━━━━━━\nO'zgartirish uchun:\n/settings min 5\n/settings max 30\n/settings lang uz`);
    }
    const key=args[0];
    const val=args[1];
    if(key==="min"&&val){
      s.minPlayers=Number(val);
      groupSettings.set(chatId,s);
      return bot.sendMessage(msg.chat.id,`✅ Minimal o'yinchi: ${s.minPlayers}`);
    }
    if(key==="max"&&val){
      s.maxPlayers=Number(val);
      groupSettings.set(chatId,s);
      return bot.sendMessage(msg.chat.id,`✅ Maximal o'yinchi: ${s.maxPlayers}`);
    }
    if(key==="lang"&&val){
      s.language=val;
      groupSettings.set(chatId,s);
      return bot.sendMessage(msg.chat.id,`✅ Til: ${s.language}`);
    }
    return bot.sendMessage(msg.chat.id,"❌ Noto'g'ri format.\nUsage: /settings [min|max|lang] [qiymat]");
  }
  function getGroupSettings(chatId){return groupSettings.get(chatId)||{minPlayers:config.minPlayers,maxPlayers:config.maxPlayers,language:"uz"};}
  bot.onText(/^\/game(?:@\S+)?$/,msg=>createGame(msg));
  bot.onText(/^\/mafia(?:@\S+)?$/,msg=>createGame(msg));
  bot.onText(/^\/top(?:@\S+)?$/,msg=>showTop(msg));
  bot.onText(/^\/stop(?:@\S+)?$/,msg=>stopGame(msg));
  bot.onText(/^\/end(?:@\S+)?$/,msg=>stopGame(msg));
  bot.onText(/^\/extend(?:@\S+)?$/,msg=>extendGame(msg));
  bot.onText(/^\/utag(?:@\S+)?$/,msg=>utagGame(msg));
  bot.onText(/^\/kick(?:@\S+)?$/,msg=>kickPlayer(msg));
  bot.onText(/^\/leave(?:@\S+)?$/,msg=>leaveGame(msg));
  bot.onText(/^\/my_role(?:@\S+)?$/,msg=>myRole(msg));
  bot.onText(/^\/settings(?:@\S+)?$/,msg=>settings(msg));
}
async function getActive(chatId){return await games.getActiveByChat(chatId);}
async function join(chatId,userId){const g=await getActive(chatId);if(!g)return null; await users.upsert({id:userId}); await games.addPlayer(g.id,userId); return games.players(g.id);}
  async function startMatch(bot,msg,g){
    if(msg.chat.type==="private") return bot.sendMessage(msg.chat.id,"❌ Bu buyruq faqat guruhlarda ishlaydi.");
    if(!await checkAdmin(bot,msg)) return bot.sendMessage(msg.chat.id,"❌ Faqat admin o'yinni boshlashi mumkin.");
    if(g.state!=="lobby") return bot.sendMessage(msg.chat.id,"❌ O'yin allaqachon boshlangan.");
    const players=await games.players(g.id);
    if(players.length<config.minPlayers) return bot.sendMessage(msg.chat.id,`❌ Minimal ${config.minPlayers} o'yinchi kerak (hozir ${players.length}).`);
    const assigned=roles.assign(g.id,players.map(p=>p.user_id));
    for(const a of assigned){
      await games.setRole(g.id,a.user_id,a.roleId);
      try{
        const card=cardText(a.roleId);
        if(card&&a.user_id!==msg.from.id) await bot.sendMessage(a.user_id,`🎭  SIZNING ROLINGIZ\n━━━━━━━━━━━━━━━━━━\n${card}`);
      }catch(_){}
    }
    await games.update(g.id,{state:"running",phase:"night"});
    return bot.sendMessage(msg.chat.id,"🎭  O'YIN BOSHLANDI!\n━━━━━━━━━━━━━━━━━━\n🔒  Har bir o'yinchiga rol kartochkasi PM'da yuborildi.\n━━━━━━━━━━━━━━━━━━");
  }
  module.exports={register,getActive,join,startMatch};
