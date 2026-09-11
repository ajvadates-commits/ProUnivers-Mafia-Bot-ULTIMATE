const db = require("../database");
function top(limit=10) { return db.prepare("SELECT id,username,first_name,wins,losses,games,xp,level FROM users ORDER BY wins DESC,xp DESC LIMIT ?").all(limit); }
function totals() { return db.prepare("SELECT COUNT(*) users,SUM(games) games,SUM(wins) wins FROM users").get(); }
module.exports = { top,totals };
