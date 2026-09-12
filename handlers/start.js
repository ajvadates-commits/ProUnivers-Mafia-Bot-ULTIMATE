const users = require("../database/users");
const { main } = require("../keyboards/main");
const { t } = require("../services/language");
const config = require("../config");
const moderation=require("../database/moderation");
function register({bot,cloneId=0}) {
  bot.onText(/^\/start(?:\s+(.+))?$/, async msg => {
    if(await moderation.isBanned(msg.from.id,cloneId))return bot.sendMessage(msg.chat.id,"⛔ Siz botdan foydalanishdan cheklangansiz.");
    await users.upsert(msg.from);
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
