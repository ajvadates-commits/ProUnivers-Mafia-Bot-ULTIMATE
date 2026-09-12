const crypto=require("crypto");
const users=require("../utils/users");
const games=require("../database/games");
const groups=require("../database/groups");
const {lobby}=require("../keyboards/lobby");
const config=require("../config");
const botRights=require("../services/botRights");
const cloneActivity=require("../services/cloneActivity");
const active=new Map();
function register({bot,cloneId=0}) {
  async function createGame(msg){
    await users.upsert(msg.from);
    if(msg.chat.type==="private") return bot.sendMessage(msg.chat.id,"Mafia o‘yini guruhda ishlaydi. Guruhga o‘ting va /mafia bosing.");
    await groups.upsert(msg.chat.id,msg.chat.title);
    try{
      const r=await botRights.check(bot,msg.chat.id);
      await botRights.audit(msg.chat.id,null,r);
      if(!r.ok) return bot.sendMessage(msg.chat.id,botRights.text(r));
      if(active.has(msg.chat.id)) return bot.sendMessage(msg.chat.id,"Faol lobby mavjud.");
      const id=crypto.randomUUID(); await games.create(id,msg.chat.id); await games.addPlayer(id,msg.from.id); cloneActivity.track(cloneId,"game_start",msg);
      active.set(msg.chat.id,id);
      const u=await users.get(msg.from.id);
      return bot.sendMessage(msg.chat.id,`🎭 Mafia lobby\n👥 1/${config.maxPlayers}`,{reply_markup:lobby(u.language)});
    }catch(e){return bot.sendMessage(msg.chat.id,"❌ Bot admin huquqlarini tekshirib bo‘lmadi.");}
  }
  bot.onText(/^\/mafia$/,msg=>createGame(msg));
  bot.onText(/^O‘yin yaratish$|^O'yin yaratish$|^Create game$|^Создать игру$/,msg=>createGame(msg));
}
async function getActive(chatId){const id=active.get(chatId);return id?await games.get(id):null;}
async function join(chatId,userId){const g=await getActive(chatId);if(!g)return null; await users.upsert({id:userId}); await games.addPlayer(g.id,userId); return games.players(g.id);}
module.exports={register,getActive,join};