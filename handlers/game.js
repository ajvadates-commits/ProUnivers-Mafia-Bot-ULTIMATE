const crypto=require("crypto");
const users=require("../database/users");
const games=require("../database/games");
const groups=require("../database/groups");
const {lobby}=require("../keyboards/game");
const config=require("../config");
const botRights=require("../services/botRights");
const cloneActivity=require("../services/cloneActivity");
const db=require("../database");
const active=new Map();
function register({bot,cloneId=0}) {
  async function createGame(msg){
    await users.upsert(msg.from);
    if(msg.chat.type==="private") return bot.sendMessage(msg.chat.id,"🎭 Mafia o'yini faqat guruhlarda ishlaydi!");
    await groups.upsert(msg.chat.id,msg.chat.title);
    try{
      const r=await botRights.check(bot,msg.chat.id);
      await botRights.audit(msg.chat.id,null,r);
      if(!r.ok) return bot.sendMessage(msg.chat.id,botRights.text(r));
      if(active.has(msg.chat.id)) return bot.sendMessage(msg.chat.id,"⏳ Faol lobby mavjud.");
      const id=crypto.randomUUID(); await games.create(id,msg.chat.id); await games.addPlayer(id,msg.from.id); cloneActivity.track(cloneId,"game_start",msg);
      active.set(msg.chat.id,id);
      const name=msg.from.first_name||msg.from.username||"O'yinchi";
      const txt=`🎭  MAFIA LOBBY\n━━━━━━━━━━━━━━━━━━\n🎮  Yaratuvchi: ${name}\n👥  1/${config.maxPlayers}\n━━━━━━━━━━━━━━━━━━\n  1. ${name}\n━━━━━━━━━━━━━━━━━━`;
      return bot.sendMessage(msg.chat.id,txt,{reply_markup:lobby()});
    }catch(e){return bot.sendMessage(msg.chat.id,"❌ Xatolik.");}
  }
  async function stopGame(msg){
    if(msg.chat.type==="private") return;
    const g=await getActive(msg.chat.id);
    if(!g) return bot.sendMessage(msg.chat.id,"❌ Faol o'yin yo'q.");
    try{await games.update(g.id,{state:"ended",phase:"ended"});}catch(_){}
    active.delete(msg.chat.id);
    return bot.sendMessage(msg.chat.id,"🛑  O'yin to'xtatildi!");
  }
  async function showTop(msg){
    if(msg.chat.type==="private") return;
    let top=[];
    try{top=await db.prepare("SELECT id,first_name,username,wins,level,xp,games FROM users ORDER BY wins DESC,xp DESC LIMIT 10").all();}catch(e){}
    if(!top.length) return bot.sendMessage(msg.chat.id,"🏆 Hali reyting yo'q.");
    const lines=top.map((u,i)=>{
      const medal=i===0?"🥇":i===1?"🥈":i===2?"🥉":`${i+1}.`;
      const name=u.first_name||u.username||u.id;
      return `  ${medal} ${name}\n      💰 ${u.wins||0} g'alaba  ·  ⭐ Lv.${u.level||1}`;
    }).join("\n\n");
    return bot.sendMessage(msg.chat.id,`🏆  TOP O'YINCHILAR\n━━━━━━━━━━━━━━━━━━\n${lines}\n━━━━━━━━━━━━━━━━━━`);
  }
  bot.onText(/^\/game$/,msg=>createGame(msg));
  bot.onText(/^\/mafia$/,msg=>createGame(msg));
  bot.onText(/^\/top$/,msg=>showTop(msg));
  bot.onText(/^\/stop$/,msg=>stopGame(msg));
  bot.onText(/^\/end$/,msg=>stopGame(msg));
}
async function getActive(chatId){const id=active.get(chatId);return id?await games.get(id):null;}
async function join(chatId,userId){const g=await getActive(chatId);if(!g)return null; await users.upsert({id:userId}); await games.addPlayer(g.id,userId); return games.players(g.id);}
module.exports={register,getActive,join};
