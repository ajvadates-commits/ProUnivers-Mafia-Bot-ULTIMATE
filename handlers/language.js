const users=require("../database/users");
const {languages}=require("../keyboards/language");
const {normalize}=require("../services/language");
function register({bot}) {
  bot.onText(/^\/language$/, msg=>bot.sendMessage(msg.chat.id,"Choose language:",{reply_markup:languages()}));
  bot.onText(/^Til$|^Language$|^Язык$/, msg=>bot.sendMessage(msg.chat.id,"Choose language:",{reply_markup:languages()}));
}
module.exports={register, set:(id,lang)=>users.setLanguage(id,normalize(lang))};
