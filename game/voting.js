function vote(game,voter,target){if(!game.player(voter)?.alive)return false;if(!game.player(target)?.alive)return false;game.setVote(voter,target);return true;}
function finish(game){const target=game.resolveVotes();if(target!==null)game.kill(target);return target;}
function tally(game){const out={};for(const t of game.votes.values())out[t]=(out[t]||0)+1;return out;}
module.exports={vote,finish,tally};
