const gameRoles=require("./gameRoles");
const roles=require("./roles");

const NIGHT_PRIORITY={BLOCK:0,PROTECT:1,INVESTIGATE:2,KILL:3};
const PHASES=["lobby","night","day","ended"];

function classify(actions){
  return actions.map(a=>({...a,action:NIGHT_PRIORITY[a.target_priority]??NIGHT_PRIORITY.KILL}));
}

async function buildPlayerMap(players){
  const map=new Map();
  for(const p of players){
    if(!p.role) continue;
    const r=roles.byId(p.role);
    map.set(p.id,{id:p.id,alive:p.alive!==0,role:p.role,side:r?.side||"TINCH"});
  }
  return map;
}

async function nightInputs(state){
  const inputs=[];
  for(const p of state.players.values()){
    inputs.push({playerId:p.id,alive:p.alive,role:p.role,side:p.side,counts:gameRoles.sidesCount([p.role])});
  }
  return inputs;
}

function resolveNight(state){
  const sorted=classify(state.actions).sort((a,b)=>a.action-b.action);
  const protectedIds=new Set();
  const killed=new Set();
  const investigated=[];
  for(const action of sorted){
    if(action.action===NIGHT_PRIORITY.BLOCK){
      for(const p of state.players.values()){
        if(p.id===action.targetId){
          p.blocked=true;
          killed.add(p.id);
        }
      }
    }else if(action.action===NIGHT_PRIORITY.PROTECT){
      for(const p of state.players.values()){
        if(p.id===action.sourceId){
          const t=state.players.get(action.targetId);
          if(t?.side!=="MAFIA"){
            protectedIds.add(action.targetId);
          }
        }
      }
    }else if(action.action===NIGHT_PRIORITY.INVESTIGATE){
      const t=state.players.get(action.targetId);
      if(t) investigated.push({targetId:t.id,role:t.role});
    }else if(action.action===NIGHT_PRIORITY.KILL){
      killed.add(action.targetId);
    }
  }
  for(const id of protectedIds) killed.delete(id);
  for(const id of killed){
    const p=state.players.get(id);
    if(p) p.alive=false;
  }
  return {
    killed:[...killed],
    protected:[...protectedIds],
    investigated,
    survivors:[...state.players.values()].filter(p=>p.alive)
  };
}

function getActivePlayers(state){
  return [...state.players.values()].filter(p=>p.alive).map(p=>({id:p.id,role:p.role,side:p.side}));
}

async function buildState(players){
  const state={
    phase:"night",
    round:1,
    players:await buildPlayerMap(players),
    actions:[],
    votes:{},
    executed:null,
    nightResult:null
  };
  return state;
}

module.exports={NIGHT_PRIORITY,PHASES,classify,resolveNight,getActivePlayers,buildState,nightInputs};
