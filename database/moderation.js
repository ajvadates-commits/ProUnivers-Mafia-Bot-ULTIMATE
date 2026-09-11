const db=require('../database');
const scope=x=>Number(x||0);
function ban(userId,actorId,reason='',cloneId=0){db.prepare(`INSERT INTO banned_users(user_id,actor_id,reason,clone_id) VALUES(?,?,?,?) ON CONFLICT(user_id) DO UPDATE SET actor_id=excluded.actor_id,reason=excluded.reason,enabled=1,clone_id=excluded.clone_id,updated_at=CURRENT_TIMESTAMP`).run(Number(userId),Number(actorId),reason||'',scope(cloneId));}
function unban(userId,cloneId=0){db.prepare('UPDATE banned_users SET enabled=0,updated_at=CURRENT_TIMESTAMP WHERE user_id=? AND clone_id=?').run(Number(userId),scope(cloneId));}
function isBanned(userId,cloneId=0){return !!db.prepare('SELECT 1 FROM banned_users WHERE user_id=? AND clone_id=? AND enabled=1').get(Number(userId),scope(cloneId));}
function all(cloneId=0){return db.prepare('SELECT * FROM banned_users WHERE enabled=1 AND clone_id=? ORDER BY updated_at DESC').all(scope(cloneId));}
module.exports={ban,unban,isBanned,all};
