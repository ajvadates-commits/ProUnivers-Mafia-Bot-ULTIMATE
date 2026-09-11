const config=require("../config");
const stats=require("../database/statistics");
const groups=require("../database/groups");
const economy=require("../services/economy");
const monetization=require("./monetization");
const roleCatalog=require("../game/roleCatalog");
function isOwner(id){return Number(id)===Number(config.ownerId)&&Number(config.ownerId)>0;}
function isAdmin(id){return isOwner(id)||config.admins.includes(Number(id));}
function dashboard(){
 const s=stats.totals();
 return {users:s.users||0,games:s.games||0,wins:s.wins||0,stars:economy.wallet().stars_balance||0,channels:groups.requiredChannels().length,roles:roleCatalog.count(),vip:config.monetization.vipPriceStars,pro:config.monetization.proPriceStars,sticker:config.monetization.premiumStickerPriceStars};
}
function render(ownerId=config.ownerId){
 const d=dashboard();
 const cs=require('../database/clones').ownerStats(ownerId);
 return `👑 OWNER PANEL\n\n👥 Users: ${d.users}\n🎮 Games: ${d.games}\n🏆 Wins: ${d.wins}\n⭐ Stars ledger: ${d.stars}\n📢 Required channels: ${d.channels}\n🧬 Clone users: ${cs.users||0}\n🧬 Clone games: ${cs.games||0}\n🎭 Roles: ${d.roles}\n\n💎 VIP: ${d.vip} Stars\n💜 PRO: ${d.pro} Stars\n🎁 Premium Sticker: ${d.sticker} Stars`;
}
module.exports={isOwner,isAdmin,dashboard,render};
