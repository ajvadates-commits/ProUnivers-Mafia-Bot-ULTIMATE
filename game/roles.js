const ROLES={
  mafia:{team:"mafia",night:true,priority:50},
  doctor:{team:"town",night:true,priority:40},
  detective:{team:"town",night:true,priority:30},
  citizen:{team:"town",night:false,priority:0},
  don:{team:"mafia",night:true,priority:60}
};
function get(name){return ROLES[name];}
function names(){return Object.keys(ROLES);}
function distribute(players){
  const n=players.length, roles=[];
  roles.push("mafia");
  if(n>=7) roles.push("don");
  if(n>=5) roles.push("doctor");
  if(n>=6) roles.push("detective");
  while(roles.length<n) roles.push("citizen");
  for(let i=roles.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[roles[i],roles[j]]=[roles[j],roles[i]];}
  return players.map((p,i)=>({...p,role:roles[i]}));
}
module.exports={ROLES,get,names,distribute};
