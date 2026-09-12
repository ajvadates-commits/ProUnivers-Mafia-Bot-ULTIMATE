const admins=require('../database/admins');
function panel(){return{inline_keyboard:[
[{text:'📊 Statistics',callback_data:'owner:stats'},{text:'👥 Users',callback_data:'owner:users'}],
[{text:'🎮 Games',callback_data:'owner:games'},{text:'💰 Economy',callback_data:'owner:economy'}],
[{text:'⭐ Stars Wallet',callback_data:'owner:wallet'},{text:'💎 Products',callback_data:'owner:products'}],
[{text:'📢 Channels',callback_data:'owner:channels'},{text:'🧬 Clone Bots',callback_data:'owner:clones'}],
[{text:'🛡 Admins',callback_data:'owner:admins'},{text:'🎭 Roles',callback_data:'owner:roles'}],
[{text:'💱 Currency Prices',callback_data:'owner:currency'},{text:'🧰 Owner Tools',callback_data:'owner:tools'}],
[{text:'🏢 PRO Groups',callback_data:'owner:progroups'},{text:'📣 Admin Message',callback_data:'owner:adminmsg'}],
[{text:'🏆 Giveaways',callback_data:'owner:giveaways'}],
[{text:'🚀 Production',callback_data:'owner:production'},{text:'🔘 Button Guide',callback_data:'owner:buttons'}],
[{text:'⚙️ Settings',callback_data:'owner:settings'}]
]};}
async function adminsPanel(ownerId){const rows=await admins.all(ownerId);return{inline_keyboard:[[{text:'➕ Admin qo‘shish',callback_data:'admin:add'}],...rows.map(a=>[{text:`${a.enabled?'🟢':'🔴'} ${a.user_id}`,callback_data:`admin:view:${a.user_id}`}]),[{text:'⬅️ Owner panel',callback_data:'owner:panel'}]]};}
function permissions(userId,active=[]){return{inline_keyboard:admins.PERMISSIONS.map(p=>[{text:`${active.includes(p)?'✅':'⬜'} ${p}`,callback_data:`adminperm:${userId}:${p}`}] ).concat([[{text:'💾 Tayyor',callback_data:`admin:save:${userId}`}],[{text:'🗑 Adminni o‘chirish',callback_data:`admin:remove:${userId}`}],[{text:'⬅️ Adminlar',callback_data:'owner:admins'}]])};}
function channels(rows){return{inline_keyboard:rows.map(c=>[{text:`🗑 ${c.title||c.chat_id}`,callback_data:`channel:remove:${encodeURIComponent(c.chat_id)}`}]).concat([[{text:'➕ Kanal qo‘shish',callback_data:'channel:add'}],[{text:'⬅️ Owner panel',callback_data:'owner:panel'}]])};}
function clones(rows){return{inline_keyboard:rows.map(c=>[{text:`${c.status==='active'?'🟢':'🔴'} @${c.username||c.bot_id}`,callback_data:`clone:view:${c.id}`}]).concat([[{text:'🧬 Clone sotib olish',callback_data:'buy:clone'},{text:'🛠 Clone yaratish',callback_data:'clone:create'}],[{text:'⬅️ Owner panel',callback_data:'owner:panel'}]])};}
module.exports={panel,adminsPanel,permissions,channels,clones};

function cloneActions(id){return{inline_keyboard:[[{text:'⏹ Stop',callback_data:`clone:stop:${id}`},{text:'▶️ Start',callback_data:`clone:start:${id}`}],[{text:'🗑 O‘chirish',callback_data:`clone:remove:${id}`}],[{text:'⬅️ Clone bots',callback_data:'owner:clones'}]]};}
module.exports.cloneActions=cloneActions;
