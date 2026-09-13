const db = require("../database");
async function create(id,chatId) { await db.prepare("INSERT INTO games(id,chat_id,state,phase) VALUES(?,?,?,?)").run(id,chatId,"lobby","lobby"); }
async function get(id) { return await db.prepare("SELECT * FROM games WHERE id=?").get(id); }
async function getActiveByChat(chatId) { return await db.prepare("SELECT * FROM games WHERE chat_id=? AND state IN ('lobby','running') ORDER BY created_at DESC LIMIT 1").get(chatId); }
async function endAllByChat(chatId) { await db.prepare("UPDATE games SET state='ended',phase='ended' WHERE chat_id=? AND state IN ('lobby','running')").run(chatId); }
async function update(id,fields) {
  const allowed = ["state","phase","ended_at"];
  const pairs = Object.keys(fields).filter(k=>allowed.includes(k));
  if (!pairs.length) return;
  const sets = pairs.map((k,i)=>`${k}=$${i+1}`).join(",");
  const values = pairs.map(k=>fields[k]);
  await db.prepare(`UPDATE games SET ${sets} WHERE id=$${pairs.length+1}`).run(...values,id);
}
async function addPlayer(gameId,userId) { await db.prepare("INSERT OR IGNORE INTO game_players(game_id,user_id) VALUES(?,?)").run(gameId,userId); }
async function players(gameId) { return await db.prepare(`SELECT gp.*,u.username,u.first_name FROM game_players gp JOIN users u ON u.id=gp.user_id WHERE gp.game_id=?`).all(gameId); }
async function setRole(gameId,userId,role) { await db.prepare("UPDATE game_players SET role=? WHERE game_id=? AND user_id=?").run(role,gameId,userId); }
async function kill(gameId,userId) { await db.prepare("UPDATE game_players SET alive=0 WHERE game_id=? AND user_id=?").run(gameId,userId); }
module.exports={create,get,getActiveByChat,endAllByChat,update,addPlayer,players,setRole,kill};