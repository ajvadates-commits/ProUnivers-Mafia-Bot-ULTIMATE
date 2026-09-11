const prod=require('../services/production');
const users=require('../database/users');
const admins=require('../database/admins');
const moderation=require('../database/moderation');

function register({bot,config,isClone=false}){
 if(isClone)return;
 prod.bootstrap();
 const owner=id=>prod.isOwner(id,config);
 const access=(id,p)=>prod.can(id,p,config);
 bot.onText(/^\/status$/,msg=>{
  if(!owner(msg.from.id)) return;
  const h=prod.health(config),s=prod.stats();
  bot.sendMessage(msg.chat.id,`🟢 BOT STATUS\n\n⏱ Uptime: ${Math.floor(h.uptime)}s\n👥 Users: ${s.users}\n🎮 Games: ${s.games}\n🔥 Active games: ${s.activeGames}\n🛡 Admins: ${s.admins}\n🚫 Banned: ${s.banned}\n💾 Memory: ${Math.round(h.memory/1024/1024)} MB\n⚙️ Node: ${h.node}`);
 });
 bot.onText(/^\/adminlist$/,msg=>{if(!owner(msg.from.id))return;const rows=admins.all(config.ownerId);bot.sendMessage(msg.chat.id,'🛡 ADMIN LIST\n\n'+(rows.map(a=>`• ${a.user_id} ${a.enabled?'🟢':'🔴'} — ${a.permissions.join(', ')||'no permissions'}`).join('\n')||'Admin yo‘q.'));});
 bot.onText(/^\/adminadd\s+(\d+)$/,msg=>{if(!owner(msg.from.id))return;const id=Number(msg.match[1]);admins.ensure(id,config.ownerId);prod.audit(msg.from.id,'admin_add',id);bot.sendMessage(msg.chat.id,`✅ Admin qo‘shildi: ${id}\nPermissionlarni /owner panelidan belgilang.`);});
 bot.onText(/^\/admindel\s+(\d+)$/,msg=>{if(!owner(msg.from.id))return;const id=Number(msg.match[1]);admins.remove(id,config.ownerId);prod.audit(msg.from.id,'admin_remove',id);bot.sendMessage(msg.chat.id,`🗑 Admin o‘chirildi: ${id}`);});
 bot.onText(/^\/adminperm\s+(\d+)\s+([a-z_]+)\s+(on|off)$/i,msg=>{if(!owner(msg.from.id))return;const id=Number(msg.match[1]),p=msg.match[2].toLowerCase(),on=msg.match[3].toLowerCase()==='on';if(!admins.PERMISSIONS.includes(p))return bot.sendMessage(msg.chat.id,'❌ Permission noto‘g‘ri.');admins.setPermission(id,config.ownerId,p,on);prod.audit(msg.from.id,'admin_permission',id,{permission:p,on});bot.sendMessage(msg.chat.id,`✅ ${id}: ${p} = ${on?'ON':'OFF'}`);});
 bot.onText(/^\/setsetting\s+([a-zA-Z0-9_.-]+)\s+(.+)$/i,msg=>{if(!owner(msg.from.id))return;prod.setSetting(msg.match[1],msg.match[2]);prod.audit(msg.from.id,'setting_update',msg.match[1]);bot.sendMessage(msg.chat.id,`⚙️ ${msg.match[1]} = ${msg.match[2]}`);});
 bot.onText(/^\/getsetting\s+([a-zA-Z0-9_.-]+)$/i,msg=>{if(!owner(msg.from.id))return;bot.sendMessage(msg.chat.id,`⚙️ ${msg.match[1]} = ${prod.setting(msg.match[1],'(not set)')}`);});
 bot.onText(/^\/maintenance\s+(on|off)$/i,msg=>{if(!owner(msg.from.id))return;const on=msg.match[1].toLowerCase()==='on';prod.setSetting('maintenance',on?'1':'0');prod.audit(msg.from.id,'maintenance',String(on));bot.sendMessage(msg.chat.id,on?'🔧 Maintenance ON':'🟢 Maintenance OFF');});
 bot.onText(/^\/broadcast\s+([\s\S]+)$/i,async msg=>{
  if(!access(msg.from.id,'broadcast'))return;
  const text=msg.match[1];const rows=users.all?users.all():[];let sent=0,failed=0;
  for(const u of rows){try{await bot.sendMessage(u.id,`📢 XABAR\n\n${text}`);sent++;}catch(_){failed++;}}
  prod.audit(msg.from.id,'broadcast','',{total:rows.length,sent,failed});bot.sendMessage(msg.chat.id,`📣 Broadcast yakunlandi\n👥 ${rows.length}\n✅ ${sent}\n❌ ${failed}`);
 });
 bot.onText(/^\/unban\s+(\d+)$/,msg=>{if(!access(msg.from.id,'unban'))return;moderation.unban(Number(msg.match[1]));prod.audit(msg.from.id,'unban',msg.match[1]);bot.sendMessage(msg.chat.id,'♻️ Unban qilindi.');});
 bot.on('callback_query',async q=>{
  const d=q.data||'';
  if(d!=='owner:production')return;
  if(!owner(q.from.id))return bot.answerCallbackQuery(q.id,{text:'Owner huquqi kerak.'});
  const s=prod.stats(); await bot.answerCallbackQuery(q.id);
  return bot.sendMessage(q.message.chat.id,`🚀 PRODUCTION CENTER\n\n👥 Users: ${s.users}\n🎮 Games: ${s.games}\n🔥 Active: ${s.activeGames}\n🛡 Admins: ${s.admins}\n🚫 Banned: ${s.banned}\n🏰 Clans: ${s.clans}\n🏆 Achievements: ${s.achievements}\n\n⚙️ /status\n🛡 /adminlist\n➕ /adminadd ID\n🗑 /admindel ID\n🔐 /adminperm ID permission on/off\n📢 /broadcast TEXT\n🔧 /maintenance on/off`);
 });
}
module.exports={register};
