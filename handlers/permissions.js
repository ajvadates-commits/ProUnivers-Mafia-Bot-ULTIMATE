const rights=require("../services/botRights");
function register({bot}){
  bot.on("my_chat_member",async update=>{
    const chat=update.chat; const n=update.new_chat_member;
    if(!chat||!["group","supergroup"].includes(chat.type)||!n)return;
    try{const r=await rights.check(bot,chat.id); await rights.audit(chat.id,n.user?.id,r); if(!r.ok) await bot.sendMessage(chat.id,rights.text(r)); else await bot.sendMessage(chat.id,"✅ Bot guruhda tayyor!");}catch(e){}
  });
  bot.onText(/^\/checkbot(?:@\S+)?$/,async msg=>{
    if(!["group","supergroup"].includes(msg.chat.type))return bot.sendMessage(msg.chat.id,"⚠️ Bu buyruq faqat guruhlarda ishlaydi.");
    try{
      const r=await rights.check(bot,msg.chat.id);
      await rights.audit(msg.chat.id,(await bot.getMe()).id,r);
      if(r.ok){
        const lines=rights.REQUIRED.map(([key,label])=>`  ✅ ${label}`).join("\n");
        return bot.sendMessage(msg.chat.id,`🛡  BOT HUQUQLARI\n━━━━━━━━━━━━━━━━━━\n${lines}\n━━━━━━━━━━━━━━━━━━\n✅ Barcha huquqlar mavjud.`);
      }else{
        const lines=rights.REQUIRED.map(([key,label])=>{
          const has=r.missing.includes(label);
          return `  ${has?"❌":"✅"} ${label}`;
        }).join("\n");
        return bot.sendMessage(msg.chat.id,`🛡  BOT HUQUQLARI\n━━━━━━━━━━━━━━━━━━\n${lines}\n━━━━━━━━━━━━━━━━━━\n⛔ Yetarli huquq yo'q.`);
      }
    }catch(e){return bot.sendMessage(msg.chat.id,"❌ Bot huquqlarini tekshirib bo'lmadi.");}
  });
}
module.exports={register};
