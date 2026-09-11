class Lobby {
  constructor({min=5,max=20,timeout=90000}={}){this.min=min;this.max=max;this.timeout=timeout;this.players=new Map();this.timer=null;}
  add(user){if(this.players.size>=this.max)return false;if(this.players.has(user.id))return false;this.players.set(user.id,user);return true;}
  remove(id){return this.players.delete(id);}
  list(){return [...this.players.values()];}
  canStart(){return this.players.size>=this.min;}
  startTimer(cb){clearTimeout(this.timer);this.timer=setTimeout(()=>cb(this.list()),this.timeout);}
  cancel(){clearTimeout(this.timer);this.timer=null;}
}
module.exports={Lobby};
