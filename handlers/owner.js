const config=require('../config');
const ownerSvc=require('../services/owner');
const roles=require('../game/roleCatalog');
const guide=require('../services/buttonGuide');
const stats=require('../database/statistics');
const groups=require('../database/groups');
const admins=require('../database/admins');
const clones=require('../database/clones');
const adminPerm=require('../services/adminPermissions');
const moderation=require('../database/moderation');
const secret=require('../utils/secretBox');
const runner=require('../clone/runner');
const {cloneTokenBot}=require('../services/cloneFactory');
const economyPrices=require('../services/economyPrices');
const {panel,adminsPanel,permissions,channels,clones:clonesKeyboard,cloneActions}=require('../keyboards/owner');
const pending=new Map();
const permissionDrafts=new Map();
function cloneOwnerPanel(){return{inline_keyboard:[
 [{text:'📊 Statistics',callback_data:'owner:stats'},{text:'👥 Users',callback_data:'owner:users'}],
 [{text:'🎮 Games',callback_data:'owner:games'},{text:'💰 Economy',callback_data:'owner:economy'}],
 [{text:'💎 Products',callback_data:'owner:products'}],
 [{text:'🛡 Admins',callback_data:'owner:admins'},{text:'🎭 Roles',callback_data:'owner:roles'}],
 [{text:'📢 Channels',callback_data:'owner:channels'},{text:'⚙️ Settings',callback_data:'owner:settings'}]
]};}
function isOwner(id,ownerId){return Number(id)===Number(ownerId||config.ownerId)&&Number(ownerId||config.ownerId)>0;}
function register({bot,ownerId=config.ownerId,isClone=false,cloneId=null}){
 const owner=()=>ownerId;
 const cloneOwner=()=>isClone && isOwner(ownerId,ownerId);
 const canManageClones=()=>!isClone;
 const keyFor=id=>`${owner()}:${id}`;

 bot.onText(/^\/clone$/,msg=>{
  if(isClone)return bot.sendMessage(msg.chat.id,'⛔ Clone botdan yangi clone sotib olib yaratish mumkin emas. Clone faqat asosiy botning 🧬 Clone Bot mahsuloti orqali olinadi.');
  if(msg.chat.type!=='private')return bot.sendMessage(msg.chat.id,'🔐 Clone tokenini private chatda yuboring.');
  if(clones.credits(msg.from.id)<1)return bot.sendMessage(msg.chat.id,`❌ Clone kreditingiz yo‘q. /shop orqali ${economyPrices.get().clone_price} Stars ga oling.`);
  pending.set(`${owner()}:${msg.from.id}`,{type:'clone_token',creatorId:msg.from.id});
  return bot.sendMessage(msg.chat.id,'🧬 CLONE YARATISH\n\nBotFather orqali yangi bot yarating va tokenini shu private chatga yuboring.\n\n⚠️ Tokenni hech kimga yubormang.\n🔐 Token bazada shifrlanadi.');
});

 bot.onText(/^\/owner$/,msg=>{
  if(!isOwner(msg.from.id,owner()))return bot.sendMessage(msg.chat.id,'⛔ Owner huquqi kerak.');
  const kb=isClone ? cloneOwnerPanel() : panel();
  return bot.sendMessage(msg.chat.id,ownerSvc.render(owner()) + (isClone?'\n\n🧬 CLONE OWNER\nBu panel faqat shu clone uchun admin va sozlamalarni boshqaradi.':''),{reply_markup:kb});
 });

 bot.onText(/^\/addadmin\s+(\d+)$/,msg=>{
  if(!isOwner(msg.from.id,owner()))return;
  const id=Number(msg.match[1]); admins.ensure(id,owner()); permissionDrafts.set(`${owner()}:${id}`,new Set());
  return bot.sendMessage(msg.chat.id,`🛡 ${id} admin qilindi. Endi yoqiladigan funksiyalarni tanlang:`,{reply_markup:permissions(id,[])});
 });

 bot.on('message',async msg=>{
  const state=pending.get(keyFor(msg.from.id));
  if(!state||!msg.text||msg.text.startsWith('/'))return;
  try{
   if(state.type==='channel'){
    const parts=msg.text.split('|').map(x=>x.trim());
    if(parts.length<3)throw new Error('CHAT_ID|TITLE|INVITE_LINK formatida yuboring.');
    groups.addRequiredChannel(parts[0],parts[1],parts.slice(2).join('|'),cloneId);
    pending.delete(keyFor(msg.from.id));
    return bot.sendMessage(msg.chat.id,'✅ Majburiy kanal qo‘shildi.');
   }
   if(state.type==='admin'){
    const id=Number(msg.text.trim());
    if(!Number.isInteger(id)||id<=0)throw new Error('Telegram ID noto‘g‘ri.');
    admins.ensure(id,owner()); permissionDrafts.set(`${owner()}:${id}`,new Set()); pending.delete(keyFor(msg.from.id));
    return bot.sendMessage(msg.chat.id,`🛡 ${id} admin qilindi. Endi funksiyalarni belgilang:`,{reply_markup:permissions(id,[])});
   }
   if(state.type==='clone_token'){
    if(msg.chat.type!=='private')return bot.sendMessage(msg.chat.id,'🔐 Token faqat private chatda qabul qilinadi.');
    const token=msg.text.trim();
    if(!/^\d+:[A-Za-z0-9_-]{20,}$/.test(token))throw new Error('Bot token formati noto‘g‘ri.');
    const info=await cloneTokenBot(token);
    if(token===config.token)throw new Error('Asosiy bot tokenini clone sifatida kiritmang.');
    if(clones.byOwner(owner()).some(x=>String(x.bot_id)===String(info.id)))throw new Error('Bu bot allaqachon clone sifatida ulangan.');
    if(!clones.consumeCredit(state.creatorId||msg.from.id))throw new Error('Clone krediti topilmadi.');
    const row=clones.create(state.creatorId||msg.from.id,secret.encrypt(token),info.id,info.username,info.first_name);
    pending.delete(keyFor(msg.from.id));
    await bot.sendMessage(msg.chat.id,`🧬 Clone #${row.id} yaratildi: @${info.username||info.first_name}\n📊 Aktivlar owner hisobingizga hisoblanadi.`);
    try{await runner.start(row);}catch(e){clones.setStatus(row.id,'error',e.message);await bot.sendMessage(msg.chat.id,'⚠️ Clone saqlandi, ammo ishga tushmadi. Status owner panelda ko‘rinadi.');}
   }
  }catch(e){return bot.sendMessage(msg.chat.id,`❌ ${e.message}`);}
 });

 bot.onText(/^\/setprice\s+(money|coin|diamond|clone_price)\s+(\d+)$/,msg=>{if(isClone||!isOwner(msg.from.id,owner()))return;try{const c=economyPrices.set(msg.match[1],msg.match[2]);bot.sendMessage(msg.chat.id,`✅ ${msg.match[1]} narxi ${c[msg.match[1]]} ⭐ qilib o‘zgartirildi.`);}catch(e){bot.sendMessage(msg.chat.id,'❌ '+e.message);}});

 bot.on('callback_query',async q=>{
  if(!isOwner(q.from.id,owner()))return;
  const d=q.data||'';
  try{
   if(d==='owner:panel')return bot.answerCallbackQuery(q.id).then(()=>bot.sendMessage(q.message.chat.id,ownerSvc.render(owner()) + (isClone?'\n\n🧬 CLONE OWNER':'') ,{reply_markup:isClone?cloneOwnerPanel():panel()}));
   if(d==='owner:stats'){
    const s=stats.totals(),cs=clones.globalStats(); await bot.answerCallbackQuery(q.id);
    return bot.sendMessage(q.message.chat.id,`📊 STATISTICS\nUsers: ${s.users||0}\nGames: ${s.games||0}\nWins: ${s.wins||0}\n🧬 Clone events: ${cs.events||0}\n🧬 Clone users: ${cs.users||0}\n🧬 Clone chats: ${cs.chats||0}\n🧬 Clone games: ${cs.games||0}`);
   }
   if(d==='owner:users'){await bot.answerCallbackQuery(q.id);return bot.sendMessage(q.message.chat.id,`👥 USERS\nTotal: ${stats.totals().users||0}\n🔨 Banned: ${moderation.all(cloneId).length}`);}
   if(d==='owner:games'){await bot.answerCallbackQuery(q.id);return bot.sendMessage(q.message.chat.id,`🎮 GAMES\nTotal: ${stats.totals().games||0}`);}
   if(d==='owner:economy'){await bot.answerCallbackQuery(q.id);return bot.sendMessage(q.message.chat.id,`💰 ECONOMY\n⭐ Stars ledger: ${require('../services/economy').wallet().stars_balance||0}`);}
   if(d==='owner:wallet'){await bot.answerCallbackQuery(q.id);return bot.sendMessage(q.message.chat.id,`⭐ STARS WALLET\nRecorded balance: ${require('../services/economy').wallet().stars_balance||0}`);}
   if(d==='owner:products'){await bot.answerCallbackQuery(q.id);return bot.sendMessage(q.message.chat.id,`💎 PRODUCTS\nVIP: ${config.monetization.vipPriceStars}\nPRO: ${config.monetization.proPriceStars}\nPremium sticker: ${config.monetization.premiumStickerPriceStars}\n🧬 Clone Bot: ${config.monetization.clonePriceStars} Stars`);}
   if(d==='owner:channels'){
    const rows=groups.requiredChannels(cloneId); await bot.answerCallbackQuery(q.id);
    return bot.sendMessage(q.message.chat.id,`📢 MAJBURIY KANALLAR\n${rows.length?rows.map(c=>`• ${c.title||c.chat_id} — ${c.chat_id}`).join('\n'):'Kanal yo‘q.'}`,{reply_markup:channels(rows)});
   }
   if(d==='channel:add'){pending.set(keyFor(q.from.id),{type:'channel'});await bot.answerCallbackQuery(q.id);return bot.sendMessage(q.message.chat.id,'➕ Kanal qo‘shish:\nCHAT_ID|TITLE|INVITE_LINK');}
   if(d.startsWith('channel:remove:')){const id=decodeURIComponent(d.split(':').slice(2).join(':'));groups.removeRequiredChannel(id,cloneId);await bot.answerCallbackQuery(q.id,{text:'Kanal olib tashlandi'});return bot.sendMessage(q.message.chat.id,'🗑 Majburiy kanal olib tashlandi.');}
   if(d==='owner:admins'){
    await bot.answerCallbackQuery(q.id);return bot.sendMessage(q.message.chat.id,`🛡 ADMINS\n${admins.all(owner()).map(a=>`• ${a.user_id}: ${a.enabled?'ACTIVE':'DISABLED'} | ${a.permissions.length?a.permissions.join(', '):'hech biri'}`).join('\n')||'Admin yo‘q.'}`,{reply_markup:adminsPanel(owner())});
   }
   if(d==='admin:add'){pending.set(keyFor(q.from.id),{type:'admin'});await bot.answerCallbackQuery(q.id);return bot.sendMessage(q.message.chat.id,'➕ Admin Telegram ID sini yuboring.');}
   if(d.startsWith('admin:view:')){
    const id=Number(d.split(':')[2]),a=admins.get(id,owner());if(!a)return bot.answerCallbackQuery(q.id,{text:'Admin topilmadi'});
    permissionDrafts.set(`${owner()}:${id}`,new Set(a.permissions));await bot.answerCallbackQuery(q.id);return bot.sendMessage(q.message.chat.id,adminPerm.text(id,owner()),{reply_markup:permissions(id,a.permissions)});
   }
   if(d.startsWith('adminperm:')){
    const [_,id,p]=d.split(':');const n=Number(id);const draftKey=`${owner()}:${n}`;const set=permissionDrafts.get(draftKey)||new Set();
    set.has(p)?set.delete(p):set.add(p);permissionDrafts.set(draftKey,set);await bot.answerCallbackQuery(q.id,{text:set.has(p)?'Yoqildi':'O‘chirildi'});
    return bot.editMessageReplyMarkup(permissions(n,[...set]),{chat_id:q.message.chat.id,message_id:q.message.message_id});
   }
   if(d.startsWith('admin:save:')){
    const id=Number(d.split(':')[2]),set=permissionDrafts.get(`${owner()}:${id}`)||new Set();
    for(const p of admins.PERMISSIONS)admins.setPermission(id,owner(),p,set.has(p));
    await bot.answerCallbackQuery(q.id,{text:'Saqlanildi'});return bot.sendMessage(q.message.chat.id,adminPerm.text(id,owner()),{reply_markup:adminsPanel(owner())});
   }
   if(d.startsWith('admin:remove:')){const id=Number(d.split(':')[2]);admins.remove(id,owner());permissionDrafts.delete(`${owner()}:${id}`);await bot.answerCallbackQuery(q.id,{text:'Admin o‘chirildi'});return bot.sendMessage(q.message.chat.id,'🗑 Admin o‘chirildi.',{reply_markup:adminsPanel(owner())});}
   if(d==='owner:roles'){await bot.answerCallbackQuery(q.id);return bot.sendMessage(q.message.chat.id,`🎭 Roles: ${roles.count()}\n`+roles.all().map((r,i)=>`${i+1}. ${r.name} — ${r.team}`).join('\n'));}
   if(d==='owner:buttons'){await bot.answerCallbackQuery(q.id);return bot.sendMessage(q.message.chat.id,Object.entries(guide.all()).map(([k,v])=>`${k} — ${v}`).join('\n'));}
   if(d==='owner:currency'){await bot.answerCallbackQuery(q.id);const c=economyPrices.get();return bot.sendMessage(q.message.chat.id,`💱 CURRENCY PRICES\n\n💵 Money: ${c.money} ⭐\n🪙 Coin: ${c.coin} ⭐\n💎 Diamond: ${c.diamond} ⭐\n\nOwner o‘zgartirishi: /setprice money 10 | /setprice coin 100 | /setprice diamond 50 | /setprice clone_price 100`);}
   if(d==='owner:settings'){await bot.answerCallbackQuery(q.id);return bot.sendMessage(q.message.chat.id,`⚙️ SETTINGS\nPlayers: ${config.minPlayers}-${config.maxPlayers}\nClone price: ${economyPrices.get().clone_price} Stars\nCurrency: money=${economyPrices.get().money}, diamond=${economyPrices.get().diamond}, coin=${economyPrices.get().coin}`);}
   if(d==='owner:clones'){
    if(!canManageClones()){await bot.answerCallbackQuery(q.id,{text:'Clone owner bu bo‘limga kira olmaydi.'});return;}
    const rows=require('../database').prepare('SELECT id,owner_id,bot_id,username,first_name,status,created_at,updated_at FROM clones ORDER BY id DESC').all();await bot.answerCallbackQuery(q.id);
    return bot.sendMessage(q.message.chat.id,`🧬 CLONE BOTS\nCredits: ${clones.credits(owner())}\n${rows.map(c=>`#${c.id} @${c.username||c.bot_id} — ${c.status}`).join('\n')||'Clone yo‘q.'}`,{reply_markup:clonesKeyboard(rows)});
   }
   if(d.startsWith('clone:stop:')){
    if(!canManageClones()){await bot.answerCallbackQuery(q.id,{text:'Faqat asosiy owner boshqaradi.'});return;}
    const id=Number(d.split(':')[2]),r=clones.get(id);if(!r)return bot.answerCallbackQuery(q.id,{text:'Topilmadi'});runner.stop(id);await bot.answerCallbackQuery(q.id,{text:'Clone to‘xtatildi'});return bot.sendMessage(q.message.chat.id,`⏹ Clone #${id} to‘xtatildi.`);
   }
   if(d.startsWith('clone:start:')){
    if(!canManageClones()){await bot.answerCallbackQuery(q.id,{text:'Faqat asosiy owner boshqaradi.'});return;}
    const id=Number(d.split(':')[2]),r=clones.get(id);if(!r)return bot.answerCallbackQuery(q.id,{text:'Topilmadi'});await runner.start(r);await bot.answerCallbackQuery(q.id,{text:'Clone ishga tushdi'});return bot.sendMessage(q.message.chat.id,`▶️ Clone #${id} ishga tushdi.`);
   }
   if(d.startsWith('clone:remove:')){
    if(!canManageClones()){await bot.answerCallbackQuery(q.id,{text:'Faqat asosiy owner boshqaradi.'});return;}
    const id=Number(d.split(':')[2]),r=clones.get(id);if(!r)return bot.answerCallbackQuery(q.id,{text:'Topilmadi'});runner.stop(id);clones.remove(id);await bot.answerCallbackQuery(q.id,{text:'Clone o‘chirildi'});return bot.sendMessage(q.message.chat.id,`🗑 Clone #${id} o‘chirildi.`);
   }
   if(d.startsWith('clone:view:')){
    if(!canManageClones()){await bot.answerCallbackQuery(q.id,{text:'Faqat asosiy owner boshqaradi.'});return;}
    const id=Number(d.split(':')[2]),r=clones.get(id);if(!r)return bot.answerCallbackQuery(q.id,{text:'Topilmadi'});
    const s=clones.stats(id);await bot.answerCallbackQuery(q.id);return bot.sendMessage(q.message.chat.id,`🧬 CLONE #${id}\n@${r.username||r.bot_id}\nStatus: ${r.status}\nEvents: ${s.events||0}\nUsers: ${s.users||0}\nChats: ${s.chats||0}\nGames: ${s.games||0}`,{reply_markup:cloneActions(id)});
   }
   if(d==='clone:create'){
    if(!canManageClones()){await bot.answerCallbackQuery(q.id,{text:'Clone faqat asosiy botda yaratiladi.'});return;}
    if(clones.credits(owner())<1){await bot.answerCallbackQuery(q.id,{text:'Clone krediti yo‘q'});return bot.sendMessage(q.message.chat.id,`❌ Avval ${config.monetization.clonePriceStars} Stars ga clone oling.`);}
    pending.set(keyFor(q.from.id),{type:'clone_token'});await bot.answerCallbackQuery(q.id);return bot.sendMessage(q.message.chat.id,'🧬 BotFather orqali yaratilgan bot tokenini private chatga yuboring.');
   }
  }catch(e){await bot.answerCallbackQuery(q.id,{text:'Xatolik'}).catch(()=>{});await bot.sendMessage(q.message.chat.id,`❌ ${e.message}`).catch(()=>{});}
 });
}
module.exports={register,isOwner};
