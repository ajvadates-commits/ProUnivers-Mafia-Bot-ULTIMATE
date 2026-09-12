const db=require('../database');
async function create(ownerId,tokenCipher,botId,username,firstName){const r=await db.prepare(`INSERT INTO clones(owner_id,token_cipher,bot_id,username,first_name,status) VALUES(?,?,?,?,?,?)`).run(Number(ownerId),tokenCipher,String(botId),username||'',firstName||'','active');return get(r.lastInsertRowid);}
async function get(id){return await db.prepare('SELECT * FROM clones WHERE id=?').get(Number(id));}
async function byOwner(ownerId){return await db.prepare('SELECT id,owner_id,bot_id,username,first_name,status,created_at,updated_at FROM clones WHERE owner_id=? ORDER BY id DESC').all(Number(ownerId));}
async function withToken(id){return get(id);}
async function setStatus(id,status,error=''){await db.prepare('UPDATE clones SET status=?,last_error=?,updated_at=CURRENT_TIMESTAMP WHERE id=?').run(status,error||'',Number(id));}
async function touch(id){await db.prepare('UPDATE clones SET updated_at=CURRENT_TIMESTAMP WHERE id=?').run(Number(id));}
async function remove(id){await db.prepare('DELETE FROM clones WHERE id=?').run(Number(id));}
async function addCredit(ownerId){await db.prepare('INSERT INTO clone_credits(owner_id,credits) VALUES(?,1) ON CONFLICT(owner_id) DO UPDATE SET credits=clone_credits.credits+1,updated_at=CURRENT_TIMESTAMP').run(Number(ownerId));}
async function credits(ownerId){return (await db.prepare('SELECT credits FROM clone_credits WHERE owner_id=?').get(Number(ownerId)))?.credits||0;}
async function consumeCredit(ownerId){const r=await db.prepare('UPDATE clone_credits SET credits=credits-1,updated_at=CURRENT_TIMESTAMP WHERE owner_id=? AND credits>0').run(Number(ownerId));return r.changes>0;}
async function activity(cloneId,type,chatId,userId,meta={}){await db.prepare('INSERT INTO clone_activity(clone_id,type,chat_id,user_id,meta) VALUES(?,?,?,?,?)').run(Number(cloneId),type,chatId==null?null:String(chatId),userId==null?null:Number(userId),JSON.stringify(meta));await touch(cloneId);}
async function stats(cloneId){return await db.prepare(`SELECT COUNT(*) events,COUNT(DISTINCT user_id) users,COUNT(DISTINCT chat_id) chats,SUM(CASE WHEN type='game_start' THEN 1 ELSE 0 END) games FROM clone_activity WHERE clone_id=?`).get(Number(cloneId));}
async function ownerStats(ownerId){return await db.prepare(`SELECT COUNT(*) events,COUNT(DISTINCT user_id) users,COUNT(DISTINCT chat_id) chats,SUM(CASE WHEN type='game_start' THEN 1 ELSE 0 END) games FROM clone_activity a JOIN clones c ON c.id=a.clone_id WHERE c.owner_id=?`).get(Number(ownerId));}
async function globalStats(){return await db.prepare(`SELECT COUNT(*) events,COUNT(DISTINCT user_id) users,COUNT(DISTINCT chat_id) chats,SUM(CASE WHEN type='game_start' THEN 1 ELSE 0 END) games FROM clone_activity`).get();}
module.exports={create,get,byOwner,withToken,setStatus,touch,remove,addCredit,credits,consumeCredit,activity,stats,ownerStats,globalStats};