const config=require("../config");
const monetization=require("../services/monetization");
const economy=require("../services/economy");
const prices=require("../services/economyPrices");
function register({bot,isClone=false}){
 bot.onText(/^\/shop(?:@\S+)?$/,async msg=>{
  if(msg.chat.type!=="private")return bot.sendMessage(msg.chat.id,"🔒 Bu buyruq faqat botda ishlaydi.");
  const c=await prices.get();
  const clonePrice=isClone?0:c.clone_price;
  await bot.sendMessage(msg.chat.id,`💎 SHOP\n\n💙 VIP — ${config.monetization.vipPriceStars} Stars\n💜 PRO — ${config.monetization.proPriceStars} Stars\n🎁 Premium Sticker — ${config.monetization.premiumStickerPriceStars} Stars${isClone?"":"\n🧬 Clone Bot — "+clonePrice+" Stars"}`,{reply_markup:{inline_keyboard:[
   [{text:"💙 Buy VIP",callback_data:"buy:vip"}],[{text:"💜 Buy PRO",callback_data:"buy:pro"}],[{text:"🎁 Premium sticker",callback_data:"buy:premium_sticker"}],...(isClone?[]:[[{text:"🧬 Clone Bot",callback_data:"buy:clone"}]])
  ]}});
 });
 bot.on("callback_query",async q=>{
  if(!q.data.startsWith("buy:"))return; const product=q.data.split(":")[1],stars=await monetization.product(product); if(!stars)return;
  await bot.answerCallbackQuery(q.id,{text:"Invoice prepared"});
  await bot.sendInvoice(q.message.chat.id,`Mafia ${product}`,`Purchase: ${product}`,"mafia_"+product, "XTR", [{label:product,amount:stars}]);
 });
 bot.on("pre_checkout_query",q=>bot.answerPreCheckoutQuery(q.id,true));
 bot.on("message",async msg=>{
  if(!msg.successful_payment)return;
  const sp=msg.successful_payment, product=sp.invoice_payload.replace("mafia_","");
  const expected=await monetization.product(product);
  if(!expected||Number(sp.total_amount)!==Number(expected))return bot.sendMessage(msg.chat.id,"❌ To‘lov summasi mos emas. Owner bilan bog‘laning.");
  const fresh=await economy.recordStarsPurchase(msg.from.id,product,sp.total_amount,sp.telegram_payment_charge_id);
  if(!fresh)return bot.sendMessage(msg.chat.id,"ℹ️ Bu to‘lov allaqachon qayta ishlangan.");
  if(product==="clone")await require("../database/clones").addCredit(msg.from.id); else await monetization.grant(msg.from.id,product);
  await bot.sendMessage(msg.chat.id,product==="clone"?`✅ Clone krediti berildi!\n⭐ ${sp.total_amount} Stars\n🧬 /clone orqali tokenni ulab clone yarating.`:`✅ To‘lov qabul qilindi!\n⭐ ${sp.total_amount} Stars\n💎 ${product} aktiv qilindi.`);
 });
}
module.exports={register};