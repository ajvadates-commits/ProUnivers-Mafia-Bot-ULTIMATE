function validateAction(game,actor,target,action){
  const a=game.player(actor), t=game.player(target);
  if(!a||!a.alive||!t||!t.alive) return {ok:false,error:"Invalid player"};
  if(action==="kill"&&!["mafia","don"].includes(a.role))return{ok:false,error:"Not mafia"};
  if(action==="heal"&&a.role!=="doctor")return{ok:false,error:"Not doctor"};
  if(action==="inspect"&&a.role!=="detective")return{ok:false,error:"Not detective"};
  if(actor===target&&action!=="heal")return{ok:false,error:"Invalid target"};
  return{ok:true};
}
function resolve(game){
  const kill=game.actions.get([...game.actions.keys()].find(k=>k.endsWith(":kill")));
  const heal=game.actions.get([...game.actions.keys()].find(k=>k.endsWith(":heal")));
  if(kill&&kill!==heal)game.kill(kill);
  game.nextPhase();
}
module.exports={validateAction,resolve};
