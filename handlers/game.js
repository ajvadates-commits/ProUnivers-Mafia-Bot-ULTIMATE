const crypto=require("crypto");
const games=require("../database/games");
const users=require("../database/users");
const groups=require("../database/groups");
const {lobby}=require("../keyboards/game");
const config=require("../config");
const cloneActivity=require("../services/cloneActivity");
const botRights=require("../services/botRights");
const active=new Map();
function register({bot,cloneId}) {
  bot.onText(/^\/mafia$/, msg=>{
    users.upsert(msg.from);
    if(msg.chat.type==="private") return bot.sendMessage(msg.chat.id,"Mafia o‘yini guruhda ishlaydi.");
    groups.upsert(msg.chat.id,msg.chat.title);
    botRights.check(bot,msg.chat.id).then(r=>{
      botRights.audit(msg.chat.id,null,r);
      if(!r.ok) return bot.sendMessage(msg.chat.id,botRights.text(r));
      if(active.has(msg.chat.id)) return bot.sendMessage(msg.chat.id,"Faol lobby mavjud.");
      const id=crypto.randomUUID(); games.create(id,msg.chat.id); games.addPlayer(id,msg.from.id); cloneActivity.track(cloneId,"game_start",msg);
      active.set(msg.chat.id,id);
      return bot.sendMessage(msg.chat.id,`🎭 Mafia lobby\n👥 1/${config.maxPlayers}`,{reply_markup:lobby(users.get(msg.from.id).language)});
    }).catch(e=>bot.sendMessage(msg.chat.id,"❌ Bot admin huquqlarini tekshirib bo‘lmadi."));
    return;
  });
}
function getActive(chatId){const id=active.get(chatId);return id?games.get(id):null;}
function join(chatId,userId){const g=getActive(chatId);if(!g)return null; users.upsert({id:userId}); games.addPlayer(g.id,userId); return games.players(g.id);}
module.exports={register,getActive,join,active};
