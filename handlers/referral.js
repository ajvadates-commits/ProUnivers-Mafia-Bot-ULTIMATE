const referral=require("../services/referral");
function register({bot}){bot.onText(/^\/referrals(?:@\S+)?$/,async msg=>{
  if(msg.chat.type!=="private")return bot.sendMessage(msg.chat.id,"🔒 Bu buyruq faqat botda ishlaydi.");
  const n=await referral.count(msg.from.id);
  await bot.sendMessage(msg.chat.id,`👥 Referrals: ${n}`);
});}
module.exports={register};
