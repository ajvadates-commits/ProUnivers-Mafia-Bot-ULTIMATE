const tools=require('../database/ownerTools');
const users=require('../database/users');
const admins=require('../database/admins');
const prices=require('../services/economyPrices');
const config=require('../config');
const {randomInt}=require('crypto');
function owner(id,ownerId){return Number(id)===Number(ownerId||config.ownerId)&&Number(ownerId||config.ownerId)>0}
function register({bot,ownerId=config.ownerId,isClone=false}){
 if(isClone)return;
 const pending=new Map();
 bot.onText(/^\/adminmsg$/,msg=>{if(!owner(msg.from.id,ownerId))return;pending.set(msg.from.id,{type:'adminmsg'});bot.sendMessage(msg.chat.id,'📣 Adminlarga yuboriladigan xabarni yuboring.');});
 bot.onText(/^\/progroups$/,msg=>{if(!owner(msg.from.id,ownerId))return;const rows=tools.listProGroups();bot.sendMessage(msg.chat.id,'🏢 PRO GROUPS\n\n'+(rows.map(g=>`#${g.id} ${g.title} — ${g.price} ${g.currency}`).join('\n')||'Guruh yo‘q.'));});
 bot.onText(/^\/progroup\s+(-?\d+)\s+(.+?)\s+(\d+)\s+(coin|money|diamond)\s*(.*)$/i,msg=>{if(!owner(msg.from.id,ownerId))return;const g=tools.addProGroup(msg.match[1],msg.match[2],msg.match[3],msg.match[4].toLowerCase(),msg.match[5]||'');bot.sendMessage(msg.chat.id,`✅ PRO Group qo‘shildi.\n🏢 ${g.title}\n💰 ${g.price} ${g.currency}\n🔗 ${g.invite_link||'link kiritilmagan'}`);});
 bot.onText(/^\/giveaway\s+(-?\d+)\s+(.+?)\s+(money|coin|diamond)\s+(\d+)\s+(\d+)$/i,async msg=>{
  if(!owner(msg.from.id,ownerId))return;
  const target=msg.match[1],title=msg.match[2],type=msg.match[3].toLowerCase(),amount=Number(msg.match[4]),winners=Number(msg.match[5]);
  if(amount<1||winners<1||winners>10000)return bot.sendMessage(msg.chat.id,'❌ Miqdor yoki g‘oliblar soni noto‘g‘ri.');
  const g=tools.createGiveaway(msg.from.id,target,title,type,amount,Math.min(winners,amount));
  try{await bot.sendMessage(target,`🎁 KONKURS\n\n${title}\n🏆 Sovrin: ${amount} ${type}\n👥 G‘oliblar: ${Math.min(winners,amount)}\n\nIshtirok etish uchun tugmani bosing.`,{reply_markup:{inline_keyboard:[[{text:'🎁 Ishtirok etish',callback_data:`giveaway:join:${g.id}`}]]}});return bot.sendMessage(msg.chat.id,`✅ Giveaway #${g.id} yuborildi.`);}catch(e){tools.finishGiveaway(g.id);return bot.sendMessage(msg.chat.id,`❌ Xabar yuborilmadi: ${e.message}`);}
 });
 bot.onText(/^\/finishgiveaway\s+(\d+)$/i,async msg=>{
  if(!owner(msg.from.id,ownerId))return;
  const id=Number(msg.match[1]),g=tools.getGiveaway(id);if(!g||Number(g.owner_id)!==Number(ownerId))return bot.sendMessage(msg.chat.id,'❌ Giveaway topilmadi.');
  if(g.status!=='active')return bot.sendMessage(msg.chat.id,'ℹ️ Giveaway allaqachon tugagan.');
  const list=tools.entries(id);if(!list.length){tools.finishGiveaway(id);return bot.sendMessage(msg.chat.id,'ℹ️ Ishtirokchi bo‘lmadi.');}
  const pool=[...list];for(let i=pool.length-1;i>0;i--){const j=randomInt(i+1);[pool[i],pool[j]]=[pool[j],pool[i]];}
  const selected=pool.slice(0,Math.min(g.winners_count,pool.length));
  const base=Math.floor(g.prize_amount/selected.length),rem=g.prize_amount%selected.length;
  for(let i=0;i<selected.length;i++){const amount=base+(i<rem?1:0);if(g.prize_type==='diamond')users.addDiamonds(selected[i].user_id,amount);else if(g.prize_type==='coin')users.addCoins(selected[i].user_id,amount);else users.addMoney(selected[i].user_id,amount);try{await bot.sendMessage(selected[i].user_id,`🎉 Giveaway #${id} g‘olibi bo‘ldingiz!\n🎁 ${amount} ${g.prize_type}`);}catch(_){} }
  tools.finishGiveaway(id);await bot.sendMessage(msg.chat.id,`🏁 Giveaway #${id} tugadi.\n👥 Ishtirokchilar: ${list.length}\n🏆 G‘oliblar: ${selected.length}\n🎁 Jami: ${g.prize_amount} ${g.prize_type}`);
 });
 bot.on('message',async msg=>{
  const st=pending.get(msg.from?.id); if(!st||!msg.text||msg.text.startsWith('/'))return;
  if(st.type==='adminmsg'&&owner(msg.from.id,ownerId)){
   pending.delete(msg.from.id);let ok=0,fail=0;
   for(const a of admins.all(ownerId)){try{await bot.sendMessage(a.user_id,`📣 OWNER XABARI\n\n${msg.text}`);ok++;}catch(e){fail++;}}
   return bot.sendMessage(msg.chat.id,`✅ Yuborildi: ${ok}\n❌ Yetkazilmadi: ${fail}`);
  }
 });

 bot.on('callback_query',async q=>{
  const d=q.data||''; if(!d.startsWith('giveaway:join:'))return;
  const id=Number(d.split(':')[2]);const g=tools.getGiveaway(id);if(!g||g.status!=='active')return bot.answerCallbackQuery(q.id,{text:'Konkurs tugagan'});
  try{const added=tools.enterGiveaway(id,q.from);await bot.answerCallbackQuery(q.id,{text:added?'✅ Ishtirok etdingiz!':'ℹ️ Siz allaqachon ishtirokchisiz.'});}catch(e){await bot.answerCallbackQuery(q.id,{text:'Xatolik'});}
 });

 bot.on('callback_query',async q=>{
  if(!owner(q.from.id,ownerId))return;
  const d=q.data||'';
  try{
   if(d==='owner:tools'){await bot.answerCallbackQuery(q.id);return bot.sendMessage(q.message.chat.id,`🧰 OWNER TOOLS\n\n📣 /adminmsg — barcha adminlarga xabar\n🏢 /progroups — PRO guruhlar\n🏢 /progroup CHAT_ID TITLE PRICE CURRENCY INVITE_LINK — PRO group qo‘shish
🎁 /giveaway CHAT_ID TITLE diamond 200 200 — 200 ta diamondni 200 g‘olibga
🏁 /finishgiveaway ID — random g‘oliblarni tanlash\n\n💱 /setprice money N\n🪙 /setprice coin N\n💎 /setprice diamond N\n🧬 /setprice clone_price N`);}
   if(d==='owner:progroups'){await bot.answerCallbackQuery(q.id);const rows=tools.listProGroups();return bot.sendMessage(q.message.chat.id,'🏢 PRO GROUPS\n\n'+(rows.map(g=>`🔹 ${g.title}\n💰 ${g.price} ${g.currency}\n🔗 ${g.invite_link||'link yo‘q'}`).join('\n\n')||'Guruh yo‘q.'));}
   if(d==='owner:adminmsg'){pending.set(q.from.id,{type:'adminmsg'});await bot.answerCallbackQuery(q.id);return bot.sendMessage(q.message.chat.id,'📣 Adminlarga yuboriladigan xabarni yuboring.');}
   if(d==='owner:giveaways'){await bot.answerCallbackQuery(q.id);const rows=tools.activeGiveaways();return bot.sendMessage(q.message.chat.id,'🏆 ACTIVE GIVEAWAYS\n\n'+(rows.map(g=>`#${g.id} ${g.title} — ${g.prize_amount} ${g.prize_type}, ${g.winners_count} winners`).join('\n')||'Faol konkurs yo‘q.')+'\n\nYangi: /giveaway CHAT_ID TITLE diamond 200 200\nTugatish: /finishgiveaway ID');}
  }catch(e){await bot.answerCallbackQuery(q.id,{text:'Xatolik'}).catch(()=>{});}
 });
}
module.exports={register};
