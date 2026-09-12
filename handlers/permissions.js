const rights=require("../services/botRights");
function register({bot}){
  bot.on("my_chat_member",async update=>{
    const chat=update.chat; const n=update.new_chat_member;
    if(!chat||!["group","supergroup"].includes(chat.type)||!n)return;
    try{const r=await rights.check(bot,chat.id); await rights.audit(chat.id,n.user?.id,r); if(!r.ok) await bot.sendMessage(chat.id,rights.text(r)); else await bot.sendMessage(chat.id,"✅ Mafia Bot admin huquqlari tasdiqlandi. Banlash, admin qo‘shish va boshqaruv funksiyalari tayyor.");}catch(e){}
  });
  bot.onText(/^\/checkbot$/,async msg=>{if(!["group","supergroup"].includes(msg.chat.type))return;try{const r=await rights.check(bot,msg.chat.id);await rights.audit(msg.chat.id,(await bot.getMe()).id,r);await bot.sendMessage(msg.chat.id,rights.text(r));}catch(e){await bot.sendMessage(msg.chat.id,"❌ Bot huquqlarini tekshirib bo‘lmadi: "+e.message);}});
}
module.exports={register};
