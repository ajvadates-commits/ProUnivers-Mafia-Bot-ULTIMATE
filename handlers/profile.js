const users=require("../database/users");
const {profile}=require("../keyboards/profile");
async function open(bot,msg){const u=await users.get(msg.from.id);if(!u)return bot.sendMessage(msg.chat.id,"Use /start first.");const text=`👤 ${u.first_name||u.username||u.id}\n🏆 Level: ${u.level}\n⭐ XP: ${u.xp}\n🎮 Games: ${u.games}\n✅ Wins: ${u.wins}\n❌ Losses: ${u.losses}\n💰 Coins: ${u.coins}`;return bot.sendMessage(msg.chat.id,text,{reply_markup:profile()});}
function register({bot}) {
  bot.onText(/^\/profile$/,async msg=>open(bot,msg));
  bot.onText(/^Profil$|^Profile$|^Профиль$/,async msg=>open(bot,msg));
  bot.onText(/^Profilim$|^Профиль$/,async msg=>open(bot,msg));
}
module.exports={register};