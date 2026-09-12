const clones=require('../database/clones');
function track(cloneId,type,msg,meta={}){if(!cloneId)return;clones.activity(cloneId,type,msg?.chat?.id,msg?.from?.id,meta).catch(()=>{});}
module.exports={track};