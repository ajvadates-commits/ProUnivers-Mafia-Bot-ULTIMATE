const help=require("../utils/commandHelp");
function register({bot}){bot.onText(/^\/menu$/,msg=>bot.sendMessage(msg.chat.id,`<b>📚 MAFIA BOT MENU</b>\n\n${help.render()}`,{parse_mode:"HTML"}));}
module.exports={register};
