const economy=require("../database/economy");
const users=require("../database/users");
function rewardWinner(id,coins=100,xp=50){economy.change(id,coins,"win",{coins});users.addXp(id,xp);}
function rewardLoser(id,coins=20,xp=15){economy.change(id,coins,"participation",{coins});users.addXp(id,xp);}
function rewardAll(players,winnerTeam){for(const p of players)(p.team===winnerTeam?rewardWinner:rewardLoser)(p.id);}
module.exports={rewardWinner,rewardLoser,rewardAll};
