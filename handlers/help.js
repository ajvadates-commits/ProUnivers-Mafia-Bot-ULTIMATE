function register({bot}){bot.onText(/^\/help(?:@\S+)?$/,msg=>{
  const isGroup=msg.chat.type!=="private";
  if(isGroup){
    return bot.sendMessage(msg.chat.id,`🎭  MAFIA BOT — YORDMA\n━━━━━━━━━━━━━━━━━━\n/game — o'yin boshlash\n/mafia — o'yin boshlash\n/stop — o'yni to'xtatish\n/top — reyting\n/checkbot — bot huquqlarini tekshirish\n/start — ro'yxatdan o'tish\n━━━━━━━━━━━━━━━━━━`);
  }
  return bot.sendMessage(msg.chat.id,`🎭  MAFIA BOT — YORDMA\n━━━━━━━━━━━━━━━━━━\n🎮  O'YIN:\n/game — guruhda o'yin boshlash\n/start — ro'yxatdan o'tish\n\n👤  SHAXSIY:\n/profile — profil\n/menu — menyu\n/language — til o'zgartirish\n/shop — VIP, PRO do'kon\n/referrals — takliflar\n━━━━━━━━━━━━━━━━━━`);
});}
module.exports={register};
