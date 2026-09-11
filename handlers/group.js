const groups=require("../database/groups");
function register({bot}) {
  bot.on("message",msg=>{
    if(["group","supergroup"].includes(msg.chat.type) && msg.new_chat_members) groups.upsert(msg.chat.id,msg.chat.title);
  });
}
module.exports={register};
