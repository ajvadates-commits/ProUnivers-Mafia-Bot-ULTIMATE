const rolesService=require("../services/roles");
const gameRoles=require("../services/gameRoles");
const config=require("../config");
const {card}=gameRoles;

function line(r){
  const side=r.side||"";
  return `  ${r.e}  ${r.name}\n        ${r.short||r.desc||""}`;
}
function sideLabel(k){
  const map={MAFIA:"MAFIYA 🕴",TINCH:"TINCH AHOLI 🏙",NEYTRAL:"MUSTAQIL 🎭"};
  return map[k]||k;
}
function compactForGroup(){
  const bySide={MAFIA:[],TINCH:[],NEYTRAL:[]};
  for(const r of rolesService.ROLES) bySide[r.side].push(r);
  let out=`🎭  ROLLAR KATALOGI\n━━━━━━━━━━━━━━━━━━`;
  for(const k of ["MAFIA","TINCH","NEYTRAL"]){
    const list=bySide[k]||[];
    if(!list.length) continue;
    out+=`\n\n【  ${sideLabel(k)} 】\n${list.map(line).join("\n")}`;
  }
  out+=`\n━━━━━━━━━━━━━━━━━━\n📖  To'liq ma'lumot — shaxsiy xabarda yo'k.\n🎫  O'z qoidangiz: /my_role`;
  return out;
}
function cardText(roleId){
  const r=rolesService.byId(roleId);
  if(!r) return null;
  const s=rolesService.sideInfo(r.side);
  const c=card(r);
  const win=c&&c.win?c.win:"";
  return `${r.e}  ${r.name}\n━━━━━━━━━━━━━━━━━━\n🛡  ${s.name}\n━━━━━━━━━━━━━━━━━━\n${r.desc}\n━━━━━━━━━━━━━━━━━━\n${win}`;
}
async function register({bot}){
  bot.onText(/^\/roles(?:@\S+)?$/,async msg=>{
    const txt=compactForGroup();
    if(msg.chat.type==="private"){
      return bot.sendMessage(msg.chat.id,txt);
    }
    return bot.sendMessage(msg.chat.id,txt,{reply_markup:{inline_keyboard:[[{"text":"📖  TO'LIQ KATALOG","url":"https://t.me/topmafia_uzbot?start=roles"}]]}});
  });
  bot.onText(/^\/role(?:@\S+)?\s+(.+)$/,async (msg,m)=>{
    const q=m[1].trim().toLowerCase();
    const role=rolesService.ROLES.find(r=>r.name.toLowerCase()===q||String(r.id).toLowerCase()===q||String(r.e).toLowerCase()===q);
    if(!role) return bot.sendMessage(msg.chat.id,"❌ Bunday rol topilmadi.\n/roles — barcha ro'llar ro'yxati.");
    return bot.sendMessage(msg.chat.id,cardText(role.id));
  });
}
module.exports={register,cardText};
