const config=require("../config");
const monetization=require("../services/monetization");
const economy=require("../services/economy");
const prices=require("../services/economyPrices");
const users=require("../database/users");
const crypto=require("crypto");
const pendingGifts=new Map();
const CLAIM_TTL=5*60*1000;
setInterval(()=>{const now=Date.now();for(const[k,v]of pendingGifts)if(now>v.expiresAt)pendingGifts.delete(k);},60*1000).unref();
function register({bot,isClone=false}){
 bot.onText(/^\/give(?:@\S+)?$/,async msg=>{
  if(msg.chat.type!=="private") return bot.sendMessage(msg.chat.id,"🔒 Bu buyruq faqat botda ishlaydi.");
  const parts=msg.text.trim().split(/\s+/);
  const raw=parts[1];
  if(!/^\d+$/.test(raw||"")) return bot.sendMessage(msg.chat.id,"❌ To'g'ri miqdor kiriting.\nFormat: /give 10");
  const amount=Number(raw);
  const session=await monetization.get(msg.from.id);
  const unlimited=session.vip||session.pro;
  const myWallet=await users.wallet(msg.from.id);
  const target=msg.reply_to_message?.from;
  if(target){
    if(!unlimited&&(myWallet.diamonds||0)<amount) return bot.sendMessage(msg.chat.id,`❌ Almazlaringiz yetarli emas.\n💰 Balansingiz: ${myWallet.diamonds||0} 💎`);
    if(!unlimited) await users.addDiamonds(msg.from.id,-amount);
    await users.addDiamonds(target.id,amount);
    const name=(target.username&&target.username!=="GroupAnonymousBot")?"@"+target.username:(target.first_name||"O'yinchi");
    return bot.sendMessage(msg.chat.id,`💎  ALMAZ O'TKAZILDI!\n━━━━━━━━━━━━━━━━━━\n💎  ${name} — ${amount} almaz oldi!\n━━━━━━━━━━━━━━━━━━`);
  }
  if(!unlimited&&(myWallet.diamonds||0)<amount) return bot.sendMessage(msg.chat.id,`❌ Almazlaringiz yetarli emas.\n💰 Balansingiz: ${myWallet.diamonds||0} 💎\nKo'ring: /profile`);
  const giftId=crypto.randomBytes(9).toString("hex");
  const txt=`💎  ALMAZ SOVG'A!\n━━━━━━━━━━━━━━━━━━\n💎  ${amount} almaz — birinchi bosgan oladi!\n━━━━━━━━━━━━━━━━━━`;
  const btn=await bot.sendMessage(msg.chat.id,txt,{reply_markup:{inline_keyboard:[[{"text":"💎  ALMAZ OLISH","callback_data":"claim:"+giftId}]]}});
  pendingGifts.set(giftId,{amount,giverId:msg.from.id,msgId:btn.message_id});
  return btn;
 });
 bot.on("callback_query",async q=>{
  if(!q.data.startsWith("claim:")) return;
  const giftId=q.data.split(":")[1],gift=pendingGifts.get(giftId);
  if(!gift) return bot.answerCallbackQuery(q.id,{text:"⏳ Bu sovg'a tugagan yoki allaqachon olingan.",show_alert:true});
  pendingGifts.delete(giftId);
  const session=await monetization.get(msg.from.id);
  const unlimited=session.vip||session.pro;
  if(!unlimited) await users.addDiamonds(gift.giverId,-gift.amount);
  await users.addDiamonds(q.from.id,gift.amount);
  await bot.answerCallbackQuery(q.id,{text:`💎 +${gift.amount} almaz olindi!`,show_alert:true});
  const name=(q.from.username&&q.from.username!=="GroupAnonymousBot")?"@"+q.from.username:(q.from.first_name||"O'yinchi");
  return bot.sendMessage(q.message.chat.id,`✅  ${name} sovg'ani oldi! 🎁\n━━━━━━━━━━━━━━━━━━\n💎  +${gift.amount} almaz\n━━━━━━━━━━━━━━━━━━`);
 });
 bot.onText(/^\/give(?:@\S+)?$/,async msg=>{
  if(msg.chat.type!=="private") return bot.sendMessage(msg.chat.id,"🔒 Bu buyruq faqat botda ishlaydi.");
  const parts=msg.text.trim().split(/\s+/);
  const raw=parts[1];
  if(!/^\d+$/.test(raw||"")) return bot.sendMessage(msg.chat.id,"❌ To'g'ri miqdor kiriting.\nFormat: /give 10");
  const amount=Number(raw);
  const session=await monetization.get(msg.from.id);
  const unlimited=session.vip||session.pro;
  const myWallet=await users.wallet(msg.from.id);
  const target=msg.reply_to_message?.from;
  if(target){
    if(!unlimited&&(myWallet.diamonds||0)<amount) return bot.sendMessage(msg.chat.id,`❌ Almazlaringiz yetarli emas.\n💰 Balansingiz: ${myWallet.diamonds||0} 💎`);
    if(!unlimited) await users.addDiamonds(msg.from.id,-amount);
    await users.addDiamonds(target.id,amount);
    const name=(target.username&&target.username!=="GroupAnonymousBot")?"@"+target.username:(target.first_name||"O'yinchi");
    return bot.sendMessage(msg.chat.id,`💎  ALMAZ O'TKAZILDI!\n━━━━━━━━━━━━━━━━━━\n💎  ${name} — ${amount} almaz oldi!\n━━━━━━━━━━━━━━━━━━`);
  }
  if(!unlimited&&(myWallet.diamonds||0)<amount) return bot.sendMessage(msg.chat.id,`❌ Almazlaringiz yetarli emas.\n💰 Balansingiz: ${myWallet.diamonds||0} 💎\nKo'ring: /profile`);
  const giftId=crypto.randomBytes(9).toString("hex");
  const txt=`💎  ALMAZ SOVG'A!\n━━━━━━━━━━━━━━━━━━\n💎  ${amount} almaz — birinchi bosgan oladi!\n━━━━━━━━━━━━━━━━━━`;
  const btn=await bot.sendMessage(msg.chat.id,txt,{reply_markup:{inline_keyboard:[[{"text":"💎  ALMAZ OLISH","callback_data":"claim:"+giftId}]]}});
  pendingGifts.set(giftId,{amount,giverId:msg.from.id,msgId:btn.message_id});
  return btn;
 });
}
module.exports={register};
