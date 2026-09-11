function admin(){return{inline_keyboard:[
[{text:"📊 Statistics",callback_data:"owner:stats"},{text:"👥 Users",callback_data:"owner:users"}],
[{text:"🎮 Games",callback_data:"owner:games"},{text:"💰 Economy",callback_data:"owner:economy"}],
[{text:"⭐ Stars / Wallet",callback_data:"owner:wallet"},{text:"💎 VIP / PRO",callback_data:"owner:products"}],
[{text:"📣 Broadcast",callback_data:"admin:broadcast"},{text:"📢 Required Channels",callback_data:"owner:channels"}],
[{text:"🛡 Admins",callback_data:"owner:admins"},{text:"⚙️ Settings",callback_data:"owner:settings"}]
]};}
function ownerBack(){return{inline_keyboard:[[{text:"⬅️ Owner panel",callback_data:"owner:panel"}]]};}
module.exports={admin,ownerBack};
