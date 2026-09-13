const users = require("../database/users");
const { main } = require("../keyboards/main");
const { t } = require("../services/language");
const config = require("../config");
const moderation=require("../database/moderation");
function register({bot,cloneId=0}) {
  bot.onText(/^\/start$/, async msg => {
    if(await moderation.isBanned(msg.from.id,cloneId))return bot.sendMessage(msg.chat.id,"⛔ Siz bloklangansiz.");
    await users.upsert(msg.from);
    const u=await users.get(msg.from.id);
    if(msg.chat.type!=="private"){
      return bot.sendMessage(msg.chat.id,`📋  RO'YXATDAN O'TISH\n━━━━━━━━━━━━━━━━━━\n👤  ${msg.from.first_name||"O'yinchi"}, siz ro'yxatdan o'tdingiz!\n🎮  /game — o'yin boshlash\n🏆  /top — reyting\n🛑  /stop — o'yni to'xtatish\n━━━━━━━━━━━━━━━━━━`);
    }
    await bot.sendMessage(msg.chat.id,t(u.language,"start"),{
      reply_markup:{
        inline_keyboard:[[{text:"OPEN",web_app:{url:config.appUrl}}]]
      }
    });
    return bot.sendMessage(msg.chat.id," ",{reply_markup:main(u.language)});
  });
}
module.exports={register};
