const help=require("../utils/commandHelp");
function register({bot}){bot.onText(/^\/menu(?:@\S+)?$/,msg=>{
  if(msg.chat.type!=="private")return bot.sendMessage(msg.chat.id,"🔒 Bu buyruq faqat botda ishlaydi.");
  bot.sendMessage(msg.chat.id,`<b>📚 MAFIA BOT MENU</b>\n\n${help.render()}`,{parse_mode:"HTML"});
});}
module.exports={register};
