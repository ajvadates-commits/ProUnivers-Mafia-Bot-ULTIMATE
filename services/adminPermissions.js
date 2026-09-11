const admins=require('../database/admins');
function isOwner(id,ownerId){return Number(id)===Number(ownerId);}
function can(id,permission,ownerId){return isOwner(id,ownerId)||admins.has(id,ownerId,permission);}
function label(p){return ({vip:'💎 VIP berish',pro:'💜 PRO berish',ban:'🔨 Banlash',unban:'♻️ Unban qilish',channels:'📢 Majburiy kanallar',broadcast:'📣 Broadcast',games:'🎮 O‘yin boshqaruvi',users:'👥 Foydalanuvchilar',economy:'💰 Economy',clones:'🧬 Clone boshqaruvi',stars:'⭐ Stars',roles:'🎭 Rollar',settings:'⚙️ Sozlamalar'})[p]||p;}
function text(id,ownerId){const a=admins.get(id,ownerId);if(!a)return 'Admin topilmadi.';return `🛡 ADMIN #${id}\nHolat: ${a.enabled?'ACTIVE':'DISABLED'}\n\n`+(a.permissions.length?a.permissions.map(label).join('\n'):'Hech qanday funksiya yoqilmagan.');}
module.exports={can,label,text,permissions:admins.PERMISSIONS};
