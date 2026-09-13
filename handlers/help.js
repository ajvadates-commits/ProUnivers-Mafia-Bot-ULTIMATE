function register({bot}){bot.onText(/^\/help(?:@\S+)?$/,msg=>{
  const isGroup=msg.chat.type!=="private";
  if(isGroup){
    return bot.sendMessage(msg.chat.id,
`❓ Buyruqlar ro'yxati
━━━━━━━━━━━━━━━━━━

🎮 O'YIN
/game — O'yin boshlash
/start — Ro'yxatdan o'tish
/stop — O'yni to'xtatish (admin)
/extend — Vaqtni uzaytirish (admin)
/utag — Qo'shilganlarni chaqirish (admin)
/kick — O'yinchini chiqarish (admin)
/leave — O'yindan chiqish (Premium)
/my_role — Joriy rolingiz
/roles — Barcha rollar
/settings — Guruh sozlamalari (admin)
/top — Guruh top o'yinchilari

💰 PUL VA PREMIUM
/profile — Balans va statistika

🛠 BOSHQA
/checkbot — Bot huquqlarini tekshirish
/help — Yordma
━━━━━━━━━━━━━━━━━━`);
  }
  return bot.sendMessage(msg.chat.id,
`❓ Buyruqlar ro'yxati
━━━━━━━━━━━━━━━━━━

👤 SHAXSIY
/start — Bosh menyu
/profile — Balans va statistika
/pro — Premium (VIP) sotib olish
/menu — Menyu
/language — Til o'zgartirish
/shop — Do'kon
/referrals — Takliflar

🛡 YORDAM
/help — Yordma
━━━━━━━━━━━━━━━━━━`);
});}
module.exports={register};
