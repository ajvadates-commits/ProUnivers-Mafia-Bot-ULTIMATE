const clones=require('../database/clones');
function track(cloneId,type,msg,meta={}){if(!cloneId)return;try{clones.activity(cloneId,type,msg?.chat?.id,msg?.from?.id,meta);}catch(e){/* telemetry must never break the bot */}}
module.exports={track};
