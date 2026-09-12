const db = require("../database");
async function top(limit=10) { return await db.prepare("SELECT id,username,first_name,wins,losses,games,xp,level FROM users ORDER BY wins DESC,xp DESC LIMIT ?").all(limit); }
async function totals() { return await db.prepare("SELECT COUNT(*) users,SUM(games) games,SUM(wins) wins FROM users").get(); }
module.exports={top,totals};