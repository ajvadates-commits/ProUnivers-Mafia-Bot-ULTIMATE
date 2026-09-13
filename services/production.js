const crypto = require('crypto');
const os = require('os');
const db = require('../database');
const admins = require('../database/admins');

function ownerId(config){ return Number(config.ownerId || 0); }
function isOwner(userId, config){
  const id=Number(userId);
  if(config&&config.ownerIds) return config.ownerIds.includes(id);
  return id === ownerId(config) && ownerId(config) > 0;
}
async function can(userId, perm, config){ return isOwner(userId, config) || (await admins.has(userId, ownerId(config), perm)); }
async function audit(actor, action, target='', meta={}){
  await db.prepare('INSERT INTO admin_audit(actor_id,action,target_id,meta) VALUES(?,?,?,?)').run(Number(actor), action, String(target||''), JSON.stringify(meta));
}
async function ensureTables(){
 await db.exec(`
 CREATE TABLE IF NOT EXISTS achievements (id SERIAL PRIMARY KEY, code TEXT UNIQUE, title TEXT, description TEXT, reward INTEGER DEFAULT 0);
 CREATE TABLE IF NOT EXISTS user_achievements (user_id BIGINT, achievement_id INTEGER, unlocked_at TEXT DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY(user_id,achievement_id));
 CREATE TABLE IF NOT EXISTS quests (id SERIAL PRIMARY KEY, code TEXT UNIQUE, title TEXT, description TEXT, reward INTEGER DEFAULT 0, active INTEGER DEFAULT 1);
 CREATE TABLE IF NOT EXISTS user_quests (user_id BIGINT, quest_id INTEGER, progress INTEGER DEFAULT 0, completed INTEGER DEFAULT 0, updated_at TEXT DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY(user_id,quest_id));
 CREATE TABLE IF NOT EXISTS clans (id SERIAL PRIMARY KEY, name TEXT UNIQUE, owner_id BIGINT, created_at TEXT DEFAULT CURRENT_TIMESTAMP);
 CREATE TABLE IF NOT EXISTS clan_members (clan_id INTEGER, user_id BIGINT, rank TEXT DEFAULT 'member', joined_at TEXT DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY(clan_id,user_id));
 CREATE TABLE IF NOT EXISTS referrals_v2 (referrer_id BIGINT, referred_id BIGINT PRIMARY KEY, reward INTEGER DEFAULT 0, created_at TEXT DEFAULT CURRENT_TIMESTAMP);
 CREATE TABLE IF NOT EXISTS bot_settings (key TEXT PRIMARY KEY, value TEXT NOT NULL, updated_at TEXT DEFAULT CURRENT_TIMESTAMP);
 CREATE TABLE IF NOT EXISTS broadcast_log (id SERIAL PRIMARY KEY, actor_id BIGINT, total INTEGER, sent INTEGER, failed INTEGER, created_at TEXT DEFAULT CURRENT_TIMESTAMP);
 CREATE TABLE IF NOT EXISTS game_events (id SERIAL PRIMARY KEY, game_id TEXT, chat_id BIGINT, type TEXT, payload TEXT, created_at TEXT DEFAULT CURRENT_TIMESTAMP);
 `);
}
async function setting(key, fallback=''){
 const r=await db.prepare('SELECT value FROM bot_settings WHERE key=?').get(key);
 return r ? r.value : fallback;
}
async function setSetting(key,value){await db.prepare('INSERT INTO bot_settings(key,value,updated_at) VALUES(?,?,CURRENT_TIMESTAMP) ON CONFLICT(key) DO UPDATE SET value=excluded.value,updated_at=CURRENT_TIMESTAMP').run(key,String(value));}
function health(config){return {status:'ok',uptime:process.uptime(),memory:process.memoryUsage().rss,host:os.hostname(),node:process.version,db:config.databasePath,time:new Date().toISOString()};}
function tokenHash(token){return crypto.createHash('sha256').update(token).digest('hex');}
async function bootstrap(){
 await ensureTables();
 const achievements=[['first_game','🎮 Birinchi o‘yin','Birinchi Mafia o‘yinini yakunlang',50],['first_win','🏆 Birinchi g‘alaba','Birinchi g‘alabangizni qo‘lga kiriting',100],['ten_wins','👑 10 g‘alaba','10 ta g‘alabaga erishing',500],['veteran','⚔️ Veteran','50 ta o‘yin o‘ynang',1000]];
 const q=db.prepare('INSERT OR IGNORE INTO achievements(code,title,description,reward) VALUES(?,?,?,?)');
 for(const a of achievements)await q.run(...a);
 const quests=[['daily_game','🎯 Daily Game','Bugun 1 ta o‘yin o‘ynang',100],['daily_win','🏆 Daily Win','Bugun 1 ta o‘yin yuting',250],['invite_friend','🤝 Invite Friend','Bitta yangi do‘st taklif qiling',200]];
 const qq=db.prepare('INSERT OR IGNORE INTO quests(code,title,description,reward) VALUES(?,?,?,?)');
 for(const x of quests)await qq.run(...x);
}
async function stats(){
 const q=async s=>await db.prepare(s).get()||{};
 const row=r=>r&&r.c!==undefined?Number(r.c):0;
 return {users:row(await q('SELECT COUNT(*) c FROM users')),games:row(await q('SELECT COUNT(*) c FROM games')),activeGames:row(await q("SELECT COUNT(*) c FROM games WHERE state IN ('lobby','running')")),transactions:row(await q('SELECT COUNT(*) c FROM transactions')),admins:row(await q('SELECT COUNT(*) c FROM admins WHERE enabled=1')),clans:row(await q('SELECT COUNT(*) c FROM clans')),achievements:row(await q('SELECT COUNT(*) c FROM user_achievements')),banned:row(await q('SELECT COUNT(*) c FROM banned_users WHERE enabled=1'))};
}
async function cleanup(){
 await db.prepare("DELETE FROM games WHERE state IN ('ended','finished') AND ended_at IS NOT NULL AND ended_at::timestamptz < now() - interval '7 day'").run();
 await db.prepare("DELETE FROM game_events WHERE created_at::timestamptz < now() - interval '30 day'").run();
}
module.exports={ownerId,isOwner,can,audit,ensureTables,setting,setSetting,health,tokenHash,bootstrap,stats,cleanup};