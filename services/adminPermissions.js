const admins=require('../database/admins');
function isOwner(id,ownerId){return Number(id)===Number(ownerId);}
async function can(id,permission,ownerId){return isOwner(id,ownerId)||(await admins.has(id,ownerId,permission));}
function label(p){return ({vip:'💎 VIP berish',pro:'💜 PRO berish',ban:'🔨 Banlash',unban:'♻️ Unban qilish',channels:'📢 Majburiy kanallar',broadcast:'📣 Broadcast',games:'🎮 O‘yin boshqaruvi',users:'👥 Foydalanuvchilar',economy:'💰 Economy',clones:'🧬 Clone boshqaruvi',stars:'⭐ Stars',roles:'🎭 Rollar',settings:'⚙️ Sozlamalar'})[p]||p;}
async function text(id,ownerId){const a=await admins.get(id,ownerId);if(!a)return 'Admin topilmadi.';return `🛡 ADMIN #${id}\nHolat: ${a.enabled?'ACTIVE':'DISABLED'}\n\n`+(a.permissions.length?a.permissions.map(label).join('\n'):'Hech qanday funksiya yoqilmagan.');}
module.exports={PERMISSIONS:admins.PERMISSIONS,isOwner,can,label,text};