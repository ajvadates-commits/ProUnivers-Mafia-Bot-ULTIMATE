async function safeSend(bot,chatId,text,options={}){try{return await bot.sendMessage(chatId,text,options);}catch(error){return null;}}
async function broadcast(bot,ids,text){const results=[];for(const id of ids)results.push(await safeSend(bot,id,text));return results;}
module.exports={safeSend,broadcast};
