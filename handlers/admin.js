const config=require('../config');
const stats=require('../database/statistics');
const economy=require('../services/economy');
const perms=require('../services/adminPermissions');
const moderation=require('../database/moderation');
const monetization=require('../services/monetization');
const groups=require('../database/groups');
const dbAdmins=require('../database/admins');
function owner(id,ownerId){return Number(id)===Number(ownerId||config.ownerId)&&Number(ownerId||config.ownerId)>0;}
async function allowed(id,p,ownerId){return owner(id,ownerId)||(await perms.can(id,p,ownerId||config.ownerId));}
async function keyboard(id,ownerId){const rows=[];for(const [p,t] of [['stats','📊 Statistics'],['users','👥 Users'],['games','🎮 Games'],['economy','💰 Economy'],['vip','💎 VIP/PRO'],['ban','🔨 Ban'],['channels','📢 Channels'],['broadcast','📣 Broadcast'],['clones','🧬 Clones'],['roles','🎭 Roles']])if(await allowed(id,p,ownerId))rows.push([{text:t,callback_data:`adminpanel:${p}`}]);return{inline_keyboard:rows};}
function register({bot,ownerId=config.ownerId,cloneId=0}){
 const canOpen=async id=>owner(id,ownerId)||(await Promise.all(perms.PERMISSIONS.map(p=>perms.can(id,p,ownerId)))).some(Boolean);
 bot.onText(/^\/admin$/,async msg=>{if(!await canOpen(msg.from.id))return;await bot.sendMessage(msg.chat.id,`🛡 ADMIN PANEL\n\nSizga yoqilgan funksiyalar bo‘yicha tugmalar ko‘rsatiladi.`,{reply_markup:await keyboard(msg.from.id,ownerId)});});
 bot.on('callback_query',async q=>{if(!q.data.startsWith('adminpanel:'))return;const p=q.data.split(':')[1];if(!await allowed(q.from.id,p,ownerId))return bot.answerCallbackQuery(q.id,{text:'⛔ Bu funksiya sizga yoqilmagan.'});let text='';if(p==='stats')text=JSON.stringify(await stats.totals());if(p==='users')text=`👥 Users: ${(await stats.totals()).users||0}`;if(p==='games')text=`🎮 Games: ${(await stats.totals()).games||0}`;if(p==='economy')text=`💰 Stars ledger: ${(await economy.wallet()).stars_balance||0}`;if(p==='vip')text='💎 VIP/PRO: berish huquqi yoqilgan. Owner orqali entitlement beriladi.';if(p==='ban')text=`🔨 Banned users: ${(await moderation.all()).length}\nBan/unban: /ban USER_ID [sabab] | /unban USER_ID`;if(p==='channels')text='📢 Kanal boshqaruvi owner panelida.';if(p==='broadcast')text='📣 Broadcast moduli uchun owner tasdig‘i kerak.';if(p==='clones')text='🧬 Clone boshqaruvi owner panelida.';if(p==='roles')text='🎭 Role catalog /roles buyrug‘i bilan ko‘riladi.';await bot.answerCallbackQuery(q.id);await bot.sendMessage(q.message.chat.id,text);});
 bot.onText(/^\/ban\s+(\d+)(?:\s+(.+))?$/,async msg=>{if(!await allowed(msg.from.id,'ban',ownerId))return;await moderation.ban(Number(msg.match[1]),msg.from.id,msg.match[2]||'',cloneId);await bot.sendMessage(msg.chat.id,`🔨 ${msg.match[1]} ban qilindi.`);});
 bot.onText(/^\/givevip\s+(\d+)$/,async msg=>{if(!await allowed(msg.from.id,'vip',ownerId))return;await monetization.grant(Number(msg.match[1]),'vip');await bot.sendMessage(msg.chat.id,`💎 VIP ${msg.match[1]} ga berildi.`);});
 bot.onText(/^\/givepro\s+(\d+)$/,async msg=>{if(!await allowed(msg.from.id,'pro',ownerId))return;await monetization.grant(Number(msg.match[1]),'pro');await bot.sendMessage(msg.chat.id,`💜 PRO ${msg.match[1]} ga berildi.`);});
 bot.onText(/^\/addchannel\s+(.+)$/,async msg=>{if(!await allowed(msg.from.id,'channels',ownerId))return;const p=msg.match[1].split('|').map(x=>x.trim());if(p.length<3)return bot.sendMessage(msg.chat.id,'Format: /addchannel CHAT_ID|TITLE|INVITE_LINK');await groups.addRequiredChannel(p[0],p[1],p.slice(2).join('|'),cloneId);await bot.sendMessage(msg.chat.id,'📢 Kanal qo‘shildi.');});
 bot.onText(/^\/removechannel\s+(.+)$/,async msg=>{if(!await allowed(msg.from.id,'channels',ownerId))return;await groups.removeRequiredChannel(msg.match[1].trim(),cloneId);await bot.sendMessage(msg.chat.id,'🗑 Kanal olib tashlandi.');});
 bot.onText(/^\/unban\s+(\d+)$/,async msg=>{if(!await allowed(msg.from.id,'unban',ownerId))return;await moderation.unban(Number(msg.match[1]),cloneId);await bot.sendMessage(msg.chat.id,`♻️ ${msg.match[1]} unban qilindi.`);});
}
module.exports={register};