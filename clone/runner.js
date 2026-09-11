const TelegramBot=require('node-telegram-bot-api');
const clones=require('../database/clones');
const secret=require('../utils/secretBox');
const logger=require('../utils/logger');
const started=new Map();
function registerHandlers(bot,context){
 for(const name of ['start','profile','language','game','callback','admin','economy','help','guide','owner','menu','group','permissions','inline','ranking','referral']){
  try{require(`../handlers/${name}`).register(context);}catch(e){logger.error(`Clone handler ${name} failed`,e);}
 }
}
async function start(row){if(started.has(row.id))return started.get(row.id);const token=secret.decrypt(row.token_cipher);const bot=new TelegramBot(token,{polling:true});const context={bot,db:require('../database'),config:require('../config'),logger,cloneId:row.id,ownerId:row.owner_id,isClone:true};bot.on('message',msg=>clones.activity(row.id,'message',msg.chat?.id,msg.from?.id,{command:msg.text?.split(/\s/)[0]||''}));bot.on('polling_error',e=>{clones.setStatus(row.id,'error',e.message);logger.error(`Clone ${row.id} polling error`,e);});try{const me=await bot.getMe();clones.setStatus(row.id,'active','');registerHandlers(bot,context);started.set(row.id,bot);return bot;}catch(e){clones.setStatus(row.id,'error',e.message);try{bot.stopPolling();}catch(_){}throw e;}}
function stop(id){const bot=started.get(Number(id));if(bot){try{bot.stopPolling();}catch(_){}started.delete(Number(id));}clones.setStatus(id,'stopped','');}
async function startAll(){for(const row of require('../database').prepare("SELECT * FROM clones WHERE status!='deleted'").all()){try{await start(row);}catch(e){logger.error(`Could not start clone ${row.id}`,e);}}}
module.exports={start,stop,startAll,started};
