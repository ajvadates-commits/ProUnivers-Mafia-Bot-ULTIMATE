function escapeHtml(s=""){return String(s).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;");}
function userName(u){return escapeHtml(u.first_name||u.username||String(u.id));}
function profile(u){return `👤 <b>${userName(u)}</b>\n⭐ XP: ${u.xp}\n🏆 Level: ${u.level}\n🎮 Games: ${u.games}\n💰 Coins: ${u.coins}`;}
module.exports={escapeHtml,userName,profile};
