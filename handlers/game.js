const crypto=require("crypto");
const users=require("../database/users");
const games=require("../database/games");
const groups=require("../database/groups");
const {lobby,lobbyUpdate}=require("../keyboards/game");
const config=require("../config");
const botRights=require("../services/botRights");
const cloneActivity=require("../services/cloneActivity");
const db=require("../database");
const active=new Map();
async function isAdmin(bot,chatId,userId){
  try{const m=await bot.getChatMember(chatId,userId);return["administrator","creator"].includes(m.status);}catch(_){return false;}
}
function register({bot,cloneId=0}) {
  async function createGame(msg){
    await users.upsert(msg.from);
    if(msg.chat.type==="private") return bot.sendMessage(msg.chat.id,"🎭 Mafia o'yini faqat guruhlarda ishlaydi!\n\nGuruhga o'ting va /game bosing.");
    if(!await isAdmin(bot,msg.chat.id,msg.from.id)){
      return bot.sendMessage(msg.chat.id,"⛔ Faqat guruh adminlari o'yin boshlay oladi.");
    }
    await groups.upsert(msg.chat.id,msg.chat.title);
    try{
      const r=await botRights.check(bot,msg.chat.id);
      await botRights.audit(msg.chat.id,null,r);
      if(!r.ok) return bot.sendMessage(msg.chat.id,botRights.text(r));
      if(active.has(msg.chat.id)) return bot.sendMessage(msg.chat.id,"⏳ Faol lobby mavjud. Avval tugagunini kuting.");
      const id=crypto.randomUUID(); await games.create(id,msg.chat.id); await games.addPlayer(id,msg.from.id); cloneActivity.track(cloneId,"game_start",msg);
      active.set(msg.chat.id,id);
      const u=await users.get(msg.from.id);
      const name=msg.from.first_name||msg.from.username||"O'yinchi";
      const txt=`🎭  MAFIA LOBBY\n━━━━━━━━━━━━━━━━━━\n🎮  Yaratuvchi: ${name}\n👥  1/${config.maxPlayers}\n━━━━━━━━━━━━━━━━━━\n  1. ${name}\n━━━━━━━━━━━━━━━━━━\n📌  "QO'SHILISH" — o'yinga qo'shilish\n📌  "BOSHLASH" — o'yinni boshlash`;
      return bot.sendMessage(msg.chat.id,txt,{reply_markup:lobby(u.language)});
    }catch(e){return bot.sendMessage(msg.chat.id,"❌ Xatolik yuz berdi.");}
  }
  async function showTop(msg){
    if(msg.chat.type==="private") return;
    if(!await isAdmin(bot,msg.chat.id,msg.from.id)){
      return bot.sendMessage(msg.chat.id,"⛔ Faqat guruh adminlari foydalanishi mumkin.");
    }
    let top=[];
    try{top=await db.prepare("SELECT id,first_name,username,wins,level,xp,games FROM users ORDER BY wins DESC,xp DESC LIMIT 10").all();}catch(e){}
    if(!top.length) return bot.sendMessage(msg.chat.id,"🏆 Hali reyting yo'q.");
    const lines=top.map((u,i)=>{
      const medal=i===0?"🥇":i===1?"🥈":i===2?"🥉":`${i+1}.`;
      const name=u.first_name||u.username||u.id;
      return `  ${medal} ${name}\n      💰 ${u.wins||0} g'alaba  ·  ⭐ Lv.${u.level||1}`;
    }).join("\n\n");
    const txt=`🏆  TOP O'YINCHILAR\n━━━━━━━━━━━━━━━━━━\n${lines}\n━━━━━━━━━━━━━━━━━━`;
    return bot.sendMessage(msg.chat.id,txt);
  }
  async function stopGame(msg){
    if(msg.chat.type==="private") return;
    if(!await isAdmin(bot,msg.chat.id,msg.from.id)){
      return bot.sendMessage(msg.chat.id,"⛔ Faqat guruh adminlari o'yinni to'xtata oladi.");
    }
    const g=await getActive(msg.chat.id);
    if(!g) return bot.sendMessage(msg.chat.id,"❌ Faol o'yin yo'q.");
    try{await games.update(g.id,{state:"ended",phase:"ended"});}catch(_){}
    active.delete(msg.chat.id);
    return bot.sendMessage(msg.chat.id,"🛑  O'yin to'xtatildi!\n━━━━━━━━━━━━━━━━━━\nAdmin tomonidan majburiy tugatildi.\n━━━━━━━━━━━━━━━━━━");
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
