const TelegramBot=require('node-telegram-bot-api');
async function cloneTokenBot(token){const b=new TelegramBot(token,{polling:false});try{return await b.getMe();}finally{try{await b.deleteWebHook();}catch(_){}}}
module.exports={cloneTokenBot};
