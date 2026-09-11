const config=require('../config');
const stats=require('../database/statistics');
const economy=require('../services/economy');
const perms=require('../services/adminPermissions');
const moderation=require('../database/moderation');
const monetization=require('../services/monetization');
const groups=require('../database/groups');
const dbAdmins=require('../database/admins');
function owner(id,ownerId){return Number(id)===Number(ownerId||config.ownerId)&&Number(ownerId||config.ownerId)>0;}
function allowed(id,p,ownerId){return owner(id,ownerId)||perms.can(id,p,ownerId||config.ownerId);}
function keyboard(id,ownerId){const rows=[];for(const [p,t] of [['stats','📊 Statistics'],['users','👥 Users'],['games','🎮 Games'],['economy','💰 Economy'],['vip','💎 VIP/PRO'],['ban','🔨 Ban'],['channels','📢 Channels'],['broadcast','📣 Broadcast'],['clones','🧬 Clones'],['roles','🎭 Roles']])if(allowed(id,p,ownerId))rows.push([{text:t,callback_data:`adminpanel:${p}`}]);return{inline_keyboard:rows};}
function register({bot,ownerId=config.ownerId,cloneId}){
 const canOpen=id=>owner(id,ownerId)||perms.permissions.some(p=>perms.can(id,p,ownerId));
 bot.onText(/^\/admin$/,msg=>{if(!canOpen(msg.from.id))return;bot.sendMessage(msg.chat.id,`🛡 ADMIN PANEL\n\nSizga yoqilgan funksiyalar bo‘yicha tugmalar ko‘rsatiladi.`,{reply_markup:keyboard(msg.from.id,ownerId)});});
 bot.on('callback_query',async q=>{if(!q.data.startsWith('adminpanel:'))return;const p=q.data.split(':')[1];if(!allowed(q.from.id,p,ownerId))return bot.answerCallbackQuery(q.id,{text:'⛔ Bu funksiya sizga yoqilmagan.'});let text='';if(p==='stats')text=JSON.stringify(stats.totals());if(p==='users')text=`👥 Users: ${stats.totals().users||0}`;if(p==='games')text=`🎮 Games: ${stats.totals().games||0}`;if(p==='economy')text=`💰 Stars ledger: ${economy.wallet().stars_balance||0}`;if(p==='vip')text='💎 VIP/PRO: berish huquqi yoqilgan. Owner orqali entitlement beriladi.';if(p==='ban')text=`🔨 Banned users: ${moderation.all().length}\nBan/unban: /ban USER_ID [sabab] | /unban USER_ID`;if(p==='channels')text='📢 Kanal boshqaruvi owner panelida.';if(p==='broadcast')text='📣 Broadcast moduli uchun owner tasdig‘i kerak.';if(p==='clones')text='🧬 Clone boshqaruvi owner panelida.';if(p==='roles')text='🎭 Role catalog /roles buyrug‘i bilan ko‘riladi.';await bot.answerCallbackQuery(q.id);await bot.sendMessage(q.message.chat.id,text);});
 bot.onText(/^\/ban\s+(\d+)(?:\s+(.+))?$/,msg=>{if(!allowed(msg.from.id,'ban',ownerId))return;moderation.ban(Number(msg.match[1]),msg.from.id,msg.match[2]||'',cloneId);bot.sendMessage(msg.chat.id,`🔨 ${msg.match[1]} ban qilindi.`);});
 bot.onText(/^\/givevip\s+(\d+)$/,msg=>{if(!allowed(msg.from.id,'vip',ownerId))return;monetization.grant(Number(msg.match[1]),'vip');bot.sendMessage(msg.chat.id,`💎 VIP ${msg.match[1]} ga berildi.`);});
 bot.onText(/^\/givepro\s+(\d+)$/,msg=>{if(!allowed(msg.from.id,'pro',ownerId))return;monetization.grant(Number(msg.match[1]),'pro');bot.sendMessage(msg.chat.id,`💜 PRO ${msg.match[1]} ga berildi.`);});
 bot.onText(/^\/addchannel\s+(.+)$/,msg=>{if(!allowed(msg.from.id,'channels',ownerId))return;const p=msg.match[1].split('|').map(x=>x.trim());if(p.length<3)return bot.sendMessage(msg.chat.id,'Format: /addchannel CHAT_ID|TITLE|INVITE_LINK');groups.addRequiredChannel(p[0],p[1],p.slice(2).join('|'),cloneId);bot.sendMessage(msg.chat.id,'📢 Kanal qo‘shildi.');});
 bot.onText(/^\/removechannel\s+(.+)$/,msg=>{if(!allowed(msg.from.id,'channels',ownerId))return;groups.removeRequiredChannel(msg.match[1].trim(),cloneId);bot.sendMessage(msg.chat.id,'🗑 Kanal olib tashlandi.');});
 bot.onText(/^\/unban\s+(\d+)$/,msg=>{if(!allowed(msg.from.id,'unban',ownerId))return;moderation.unban(Number(msg.match[1]),cloneId);bot.sendMessage(msg.chat.id,`♻️ ${msg.match[1]} unban qilindi.`);});
}
module.exports={register,allowed};
