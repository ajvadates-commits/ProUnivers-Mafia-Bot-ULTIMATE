const users = require("../database/users");
const { main } = require("../keyboards/main");
const { t } = require("../services/language");
const moderation=require("../database/moderation");
function register({bot,cloneId=0}) {
  bot.onText(/^\/start(?:\s+(.+))?$/, msg => {
    if(moderation.isBanned(msg.from.id,cloneId))return bot.sendMessage(msg.chat.id,"⛔ Siz botdan foydalanishdan cheklangansiz.");
    users.upsert(msg.from);
    const u=users.get(msg.from.id);
    bot.sendMessage(msg.chat.id,t(u.language,"start"),{reply_markup:main(u.language)});
  });
}
module.exports={register};
