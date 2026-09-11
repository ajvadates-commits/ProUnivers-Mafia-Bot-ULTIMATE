function aliveText(game){return game.alive().map(p=>`• ${p.first_name||p.username||p.id}`).join("\n");}
function begin(game){game.phase="day";game.votes.clear();return {round:game.round,players:game.alive()};}
function summary(game){return `☀️ Day ${game.round}\nAlive: ${game.alive().length}\n${aliveText(game)}`;}
module.exports={begin,summary,aliveText};
