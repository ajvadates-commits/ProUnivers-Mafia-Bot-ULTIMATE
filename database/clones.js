const db=require('../database');
function create(ownerId,tokenCipher,botId,username,firstName){const r=db.prepare(`INSERT INTO clones(owner_id,token_cipher,bot_id,username,first_name,status) VALUES(?,?,?,?,?,?)`).run(Number(ownerId),tokenCipher,String(botId),username||'',firstName||'','active');return get(r.lastInsertRowid);}
function get(id){return db.prepare('SELECT * FROM clones WHERE id=?').get(Number(id));}
function byOwner(ownerId){return db.prepare('SELECT id,owner_id,bot_id,username,first_name,status,created_at,updated_at FROM clones WHERE owner_id=? ORDER BY id DESC').all(Number(ownerId));}
function withToken(id){return get(id);}
function setStatus(id,status,error=''){db.prepare('UPDATE clones SET status=?,last_error=?,updated_at=CURRENT_TIMESTAMP WHERE id=?').run(status,error||'',Number(id));}
function touch(id){db.prepare('UPDATE clones SET updated_at=CURRENT_TIMESTAMP WHERE id=?').run(Number(id));}
function remove(id){db.prepare('DELETE FROM clones WHERE id=?').run(Number(id));}
function addCredit(ownerId){db.prepare('INSERT INTO clone_credits(owner_id,credits) VALUES(?,1) ON CONFLICT(owner_id) DO UPDATE SET credits=credits+1,updated_at=CURRENT_TIMESTAMP').run(Number(ownerId));}
function credits(ownerId){return db.prepare('SELECT credits FROM clone_credits WHERE owner_id=?').get(Number(ownerId))?.credits||0;}
function consumeCredit(ownerId){const r=db.prepare('UPDATE clone_credits SET credits=credits-1,updated_at=CURRENT_TIMESTAMP WHERE owner_id=? AND credits>0').run(Number(ownerId));return r.changes>0;}
function activity(cloneId,type,chatId,userId,meta={}){db.prepare('INSERT INTO clone_activity(clone_id,type,chat_id,user_id,meta) VALUES(?,?,?,?,?)').run(Number(cloneId),type,chatId==null?null:String(chatId),userId==null?null:Number(userId),JSON.stringify(meta));touch(cloneId);}
function stats(cloneId){return db.prepare(`SELECT COUNT(*) events,COUNT(DISTINCT user_id) users,COUNT(DISTINCT chat_id) chats,SUM(CASE WHEN type='game_start' THEN 1 ELSE 0 END) games FROM clone_activity WHERE clone_id=?`).get(Number(cloneId));}
function ownerStats(ownerId){return db.prepare(`SELECT COUNT(*) events,COUNT(DISTINCT user_id) users,COUNT(DISTINCT chat_id) chats,SUM(CASE WHEN type='game_start' THEN 1 ELSE 0 END) games FROM clone_activity a JOIN clones c ON c.id=a.clone_id WHERE c.owner_id=?`).get(Number(ownerId));}
function globalStats(){return db.prepare(`SELECT COUNT(*) events,COUNT(DISTINCT user_id) users,COUNT(DISTINCT chat_id) chats,SUM(CASE WHEN type='game_start' THEN 1 ELSE 0 END) games FROM clone_activity`).get();}
module.exports={create,get,byOwner,withToken,setStatus,touch,remove,addCredit,credits,consumeCredit,activity,stats,ownerStats,globalStats};
