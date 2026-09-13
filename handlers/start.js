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
      const existing=await require("../database/games").players(g.id);
      if(existing.find(p=>p.id===msg.from.id)) return bot.sendMessage(msg.chat.id,"✅ Siz allaqachon o'yinga qo'shilgansiz!");
      await require("../database/games").addPlayer(g.id,msg.from.id);
      await bot.sendMessage(msg.chat.id,"✅  O'YINGA QO'SHILDINGIZ!\n━━━━━━━━━━━━━━━━━━\n🎭  Mafia o'yini boshlanishini kuting.\n━━━━━━━━━━━━━━━━━━");
      const players=await require("../database/games").players(g.id);
      const playerList=players.map((u,i)=>{const n=(u.username&&u.username!=="GroupAnonymousBot")?"@"+u.username:(u.first_name||"O'yinchi");return `  ${i+1}. ${n}`;}).join("\n");
      const txt=`🎭  MAFIA LOBBY\n━━━━━━━━━━━━━━━━━━\n👥  ${players.length}/${config.maxPlayers}\n━━━━━━━━━━━━━━━━━━\n${playerList}\n━━━━━━━━━━━━━━━━━━`;
      const btn=`https://t.me/topmafia_uzbot?start=join_${msg.chat.id}`;
      try{await bot.sendMessage(msg.chat.id,txt,{reply_markup:{inline_keyboard:[[{"text":`👥  ${players.length} o'yinchi`,callback_data:"noop"}],[{"text":"🎯  QO'SHILISH","url":btn}]]}});}catch(_){}
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
