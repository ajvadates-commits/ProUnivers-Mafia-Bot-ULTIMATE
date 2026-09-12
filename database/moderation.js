const db=require('../database');
const scope=x=>Number(x||0);
async function ban(userId,actorId,reason='',cloneId=0){await db.prepare(`INSERT INTO banned_users(user_id,actor_id,reason,clone_id) VALUES(?,?,?,?) ON CONFLICT(user_id,clone_id) DO UPDATE SET actor_id=excluded.actor_id,reason=excluded.reason,enabled=1,clone_id=excluded.clone_id,updated_at=CURRENT_TIMESTAMP`).run(Number(userId),Number(actorId),reason||'',scope(cloneId));}
async function unban(userId,cloneId=0){await db.prepare('UPDATE banned_users SET enabled=0,updated_at=CURRENT_TIMESTAMP WHERE user_id=? AND clone_id=?').run(Number(userId),scope(cloneId));}
async function isBanned(userId,cloneId=0){return !!(await db.prepare('SELECT 1 FROM banned_users WHERE user_id=? AND clone_id=? AND enabled=1').get(Number(userId),scope(cloneId)));}
async function all(cloneId=0){return await db.prepare('SELECT * FROM banned_users WHERE enabled=1 AND clone_id=? ORDER BY updated_at DESC').all(scope(cloneId));}
module.exports={ban,unban,isBanned,all};