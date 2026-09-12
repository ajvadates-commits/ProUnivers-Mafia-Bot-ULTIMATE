const groups=require("../database/groups");
function register({bot}) {
  bot.on("message",async msg=>{
    if(["group","supergroup"].includes(msg.chat.type) && msg.new_chat_members) await groups.upsert(msg.chat.id,msg.chat.title);
  });
}
module.exports={register};