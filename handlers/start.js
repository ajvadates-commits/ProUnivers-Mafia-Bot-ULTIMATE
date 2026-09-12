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
    try{await bot.sendMessage(msg.chat.id,t(u.language,"start"),{
      reply_markup:{
        inline_keyboard:[
          [{text:"OPEN",web_app:{url:config.appUrl}}],
          [{text:t(u.language,"profile"),callback_data:"menu:profile"},{text:t(u.language,"create"),callback_data:"menu:create"}]
        ]
      }
    });}catch(_){}
    return bot.sendMessage(msg.chat.id,"Pastdagi tugmalardan birini tanlang:",{reply_markup:main(u.language)});
  });
}
module.exports={register};
