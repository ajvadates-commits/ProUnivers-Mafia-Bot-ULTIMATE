const db = require("../database");
function create(id,chatId) { db.prepare("INSERT INTO games(id,chat_id,state,phase) VALUES(?,?,?,?)").run(id,chatId,"lobby","lobby"); }
function get(id) { return db.prepare("SELECT * FROM games WHERE id=?").get(id); }
function update(id,fields) {
  const allowed = ["state","phase","ended_at"];
  const pairs = Object.keys(fields).filter(k=>allowed.includes(k));
  if (!pairs.length) return;
  db.prepare(`UPDATE games SET ${pairs.map(k=>`${k}=@${k}`).join(",")} WHERE id=@id`).run({...fields,id});
}
function addPlayer(gameId,userId) { db.prepare("INSERT OR IGNORE INTO game_players(game_id,user_id) VALUES(?,?)").run(gameId,userId); }
function players(gameId) { return db.prepare(`SELECT gp.*,u.username,u.first_name FROM game_players gp JOIN users u ON u.id=gp.user_id WHERE gp.game_id=?`).all(gameId); }
function setRole(gameId,userId,role) { db.prepare("UPDATE game_players SET role=? WHERE game_id=? AND user_id=?").run(role,gameId,userId); }
function kill(gameId,userId) { db.prepare("UPDATE game_players SET alive=0 WHERE game_id=? AND user_id=?").run(gameId,userId); }
module.exports = { create,get,update,addPlayer,players,setRole,kill };
