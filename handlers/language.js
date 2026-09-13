const users=require("../database/users");
const {languages}=require("../keyboards/language");
const {normalize}=require("../services/language");
function register({bot}) {
  bot.onText(/^\/language(?:@\S+)?$/, msg=>{
    if(msg.chat.type!=="private")return bot.sendMessage(msg.chat.id,"🔒 Bu buyruq faqat botda ishlaydi.");
    bot.sendMessage(msg.chat.id,"Choose language:",{reply_markup:languages()});
  });
  bot.onText(/^Til$|^Language$|^Язык$/, msg=>{
    if(msg.chat.type!=="private")return bot.sendMessage(msg.chat.id,"🔒 Bu buyruq faqat botda ishlaydi.");
    bot.sendMessage(msg.chat.id,"Choose language:",{reply_markup:languages()});
  });
}
module.exports={register, set:(id,lang)=>users.setLanguage(id,normalize(lang))};
