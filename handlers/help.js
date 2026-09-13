function register({bot}){bot.onText(/^\/help$/,msg=>{
  const isGroup=msg.chat.type!=="private";
  if(isGroup){
    return bot.sendMessage(msg.chat.id,`🎭  MAFIA BOT — YORDMA\n━━━━━━━━━━━━━━━━━━\n/game — o'yin boshlash (admin)\n/stop — o'yni to'xtatish (admin)\n/start — ro'yxatdan o'tish\n/top — reyting (admin)\n/help — yordma\n━━━━━━━━━━━━━━━━━━`);
  }
  return bot.sendMessage(msg.chat.id,`🎭  MAFIA BOT — YORDMA\n━━━━━━━━━━━━━━━━━━\n🎮  O'YIN:\n/game — guruhda o'yin boshlash\n/start — ro'yxatdan o'tish\n\n👤  SHAXSIY:\n/profile — profil\n/shop — VIP, PRO do'kon\n/buttons — tugmalar\n/roles — rollar\n/referrals — takliflar\n\n🛡  ADMIN:\n/admin — admin panel\n/ban USER_ID — ban\n/unban USER_ID — ban olish\n/givevip USER_ID — VIP berish\n/givepro USER_ID — PRO berish\n\n👑  OWNER:\n/owner — owner panel\n/clone — clone bot\n/addadmin USER_ID — admin qo'shish\n/setprice money 15 — narx\n━━━━━━━━━━━━━━━━━━`);
});}
module.exports={register};
