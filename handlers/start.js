const users = require("../database/users");
const { main } = require("../keyboards/main");
const { t } = require("../services/language");
const config = require("../config");
const moderation=require("../database/moderation");
const game=require("./game");
function register({bot,cloneId=0}) {
  bot.onText(/^\/start(?:@\S+)?$/, async msg => {
    if(await moderation.isBanned(msg.from.id,cloneId))return bot.sendMessage(msg.chat.id,"⛔ Siz bloklangansiz.");
    await users.upsert(msg.from);
    if(msg.chat.type!=="private"){
      const g=await game.getActive(msg.chat.id);
      if(!g){
        const btn=`https://t.me/topmafia_uzbot?start=game_${msg.chat.id}`;
        return bot.sendMessage(msg.chat.id,`🎭  MAFIA O'YINI\n━━━━━━━━━━━━━━━━━━\nO'yinni boshlash uchun tugmani bosing.\n━━━━━━━━━━━━━━━━━━`,{reply_markup:{inline_keyboard:[[{"text":"🎮  O'YIN BOSHLASH","url":btn}]]}});
      }
      if(g.state==="lobby"){
        const admin=await bot.getChatMember(msg.chat.id,msg.from.id).then(m=>["creator","administrator"].includes(m.status)).catch(_=>false);
        if(admin){
          const started=await game.getActive(msg.chat.id);
          if(started&&started.id===g.id){
            try{return await require("./game").startMatch(bot,msg,g);}catch(_){return bot.sendMessage(msg.chat.id,"❌ O'yinni boshlashda xatolik.");}
          }
        }
      }
      const existing=await require("../database/games").players(g.id);
      if(existing.find(p=>p.id===msg.from.id)) return bot.sendMessage(msg.chat.id,"✅ Siz allaqachon o'yinga qo'shilgansiz!");
      await require("../database/games").addPlayer(g.id,msg.from.id);
      await bot.sendMessage(msg.chat.id,"✅  O'YINGA QO'SHILDINGIZ!\n━━━━━━━━━━━━━━━━━━\n🎭  Mafia o'yini boshlanishini kuting.\n━━━━━━━━━━━━━━━━━━");
      return;
    }
    const u=await users.get(msg.from.id);
    await bot.sendMessage(msg.chat.id,t(u.language,"start"),{
      reply_markup:{
        inline_keyboard:[[{text:"OPEN",web_app:{url:config.appUrl}}]]
      }
    });
    return bot.sendMessage(msg.chat.id," ",{reply_markup:main(u.language)});
  });
}
module.exports={register};
