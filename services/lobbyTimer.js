const EXTEND_MS=120000;
const LOBBY_MS=120000;

const timers=new Map();

function start(gameId,onExpire,ms=LOBBY_MS){
  cancel(gameId);
  const deadline=Date.now()+ms;
  const t=setTimeout(()=>{
    timers.delete(gameId);
    try{onExpire(gameId);}catch(_){}
  },ms);
  timers.set(gameId,{deadline,t});
  return deadline;
}

function extend(gameId,ms=EXTEND_MS){
  const e=timers.get(gameId);
  if(!e) return null;
  clearTimeout(e.t);
  const deadline=e.deadline+ms;
  const t=setTimeout(()=>{
    timers.delete(gameId);
    try{e.cb&&e.cb(gameId);}catch(_){}
  },deadline-Date.now());
  timers.set(gameId,{deadline,t,cb:e.cb});
  return deadline;
}

function cancel(gameId){
  const e=timers.get(gameId);
  if(!e) return false;
  clearTimeout(e.t);
  timers.delete(gameId);
  return true;
}

function msLeft(gameId){
  const e=timers.get(gameId);
  return e?Math.max(0,e.deadline-Date.now()):0;
}

module.exports={LOBBY_MS,EXTEND_MS,start,extend,cancel,msLeft};
