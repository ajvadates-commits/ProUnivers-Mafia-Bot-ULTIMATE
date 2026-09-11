const guide=require("../services/buttonGuide");
const roles=require("../game/roleCatalog");
function register({bot}){
 bot.onText(/^\/buttons$/,msg=>{
  const lines=Object.entries(guide.all()).map(([k,v])=>`<b>${k}</b> — ${v}`);
  bot.sendMessage(msg.chat.id,`<b>🔘 BUTTON GUIDE</b>\n\n${lines.join("\n")}`,{parse_mode:"HTML"});
 });
 bot.onText(/^\/roles$/,msg=>{
  bot.sendMessage(msg.chat.id,`🎭 <b>MAFIA ROLES: ${roles.count()}+</b>\n\n`+roles.all().map((r,i)=>`${i+1}. <b>${r.name}</b> — ${r.team}\n${r.description}`).join("\n"),{parse_mode:"HTML"});
 });
}
module.exports={register};
