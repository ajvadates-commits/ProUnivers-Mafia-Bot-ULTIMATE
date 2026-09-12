const users=require("../database/users");
const {profile}=require("../keyboards/profile");
function register({bot}) {
  bot.onText(/^\/profile$/, async msg=>{
    const u=await users.get(msg.from.id);
    if(!u) return bot.sendMessage(msg.chat.id,"Use /start first.");
    const text=`👤 ${u.first_name||u.username||u.id}\n🏆 Level: ${u.level}\n⭐ XP: ${u.xp}\n🎮 Games: ${u.games}\n✅ Wins: ${u.wins}\n❌ Losses: ${u.losses}\n💰 Coins: ${u.coins}`;
    return bot.sendMessage(msg.chat.id,text,{reply_markup:profile()});
  });
}
module.exports={register};