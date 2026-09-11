const {EventEmitter}=require("events");
class GameEvents extends EventEmitter {
  emitPhase(game){this.emit("phase",{gameId:game.id,chatId:game.chatId,phase:game.phase,round:game.round});}
  emitWinner(game,winner){this.emit("winner",{gameId:game.id,winner});}
}
module.exports={GameEvents};
