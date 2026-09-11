const roles=require("./roles");
const {EventEmitter}=require("events");
class MafiaGame extends EventEmitter {
  constructor(id,chatId,players=[]){super();this.id=id;this.chatId=chatId;this.players=players.map(p=>({...p,alive:true}));this.phase="lobby";this.round=0;this.votes=new Map();this.actions=new Map();}
  start(){if(this.players.length<5)throw new Error("At least 5 players required");this.players=roles.distribute(this.players);this.phase="night";this.round=1;this.emit("start",this);}
  alive(){return this.players.filter(p=>p.alive);}
  player(id){return this.players.find(p=>p.id===id);}
  kill(id){const p=this.player(id);if(p)p.alive=false;this.emit("kill",p);}
  setAction(actor,target,action){this.actions.set(`${actor}:${action}`,target);}
  setVote(voter,target){if(this.player(voter)?.alive)this.votes.set(voter,target);}
  resolveVotes(){const counts={};for(const target of this.votes.values())counts[target]=(counts[target]||0)+1;const top=Object.entries(counts).sort((a,b)=>b[1]-a[1]);if(!top.length)return null;if(top[1]&&top[0][1]===top[1][1])return null;return Number(top[0][0]);}
  checkWinner(){const m=this.alive().filter(p=>roles.get(p.role)?.team==="mafia").length;const t=this.alive().length-m;if(m===0)return"town";if(m>=t)return"mafia";return null;}
  nextPhase(){this.phase=this.phase==="night"?"day":"night";if(this.phase==="night")this.round++;this.votes.clear();this.actions.clear();this.emit("phase",this.phase);}
}
module.exports={MafiaGame};
