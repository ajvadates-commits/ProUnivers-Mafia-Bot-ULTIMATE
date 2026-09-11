const db=require('../database');
const PERMISSIONS=['vip','pro','ban','unban','channels','broadcast','games','users','economy','clones','stars','roles','settings'];
function ensure(id,ownerId,username=''){db.prepare(`INSERT INTO admins(user_id,owner_id,username,permissions,enabled) VALUES(?,?,?,?,1) ON CONFLICT(user_id,owner_id) DO UPDATE SET username=excluded.username`).run(Number(id),Number(ownerId),username||'',JSON.stringify([]));}
function get(id,ownerId){const r=db.prepare('SELECT * FROM admins WHERE user_id=? AND owner_id=?').get(Number(id),Number(ownerId));if(!r)return null;return {...r,permissions:JSON.parse(r.permissions||'[]')};}
function all(ownerId){return db.prepare('SELECT * FROM admins WHERE owner_id=? ORDER BY created_at DESC').all(Number(ownerId)).map(r=>({...r,permissions:JSON.parse(r.permissions||'[]')}));}
function setPermission(id,ownerId,p,on){if(!PERMISSIONS.includes(p))throw new Error('Unknown permission');const a=get(id,ownerId)||{permissions:[]};const s=new Set(a.permissions);on?s.add(p):s.delete(p);ensure(id,ownerId);db.prepare('UPDATE admins SET permissions=?,enabled=1,updated_at=CURRENT_TIMESTAMP WHERE user_id=? AND owner_id=?').run(JSON.stringify([...s]),Number(id),Number(ownerId));}
function has(id,ownerId,p){const a=get(id,ownerId);return !!a&&!!a.enabled&&(a.permissions.includes('*')||a.permissions.includes(p));}
function remove(id,ownerId){db.prepare('DELETE FROM admins WHERE user_id=? AND owner_id=?').run(Number(id),Number(ownerId));}
function setEnabled(id,ownerId,on){db.prepare('UPDATE admins SET enabled=?,updated_at=CURRENT_TIMESTAMP WHERE user_id=? AND owner_id=?').run(on?1:0,Number(id),Number(ownerId));}
module.exports={PERMISSIONS,ensure,get,all,setPermission,has,remove,setEnabled};
