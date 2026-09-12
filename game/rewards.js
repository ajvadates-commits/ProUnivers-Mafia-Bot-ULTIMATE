const economy=require("../database/economy");
const users=require("../database/users");
async function rewardWinner(id,coins=100,xp=50){await economy.change(id,coins,"win",{coins});await users.addXp(id,xp);}
async function rewardLoser(id,coins=20,xp=15){await economy.change(id,coins,"participation",{coins});await users.addXp(id,xp);}
async function rewardAll(players,winnerTeam){for(const p of players){if(p.team===winnerTeam)await rewardWinner(p.id);else await rewardLoser(p.id);}}
module.exports={rewardWinner,rewardLoser,rewardAll};