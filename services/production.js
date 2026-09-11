const crypto = require('crypto');
const os = require('os');
const db = require('../database');
const admins = require('../database/admins');
const moderation = require('../database/moderation');

function ownerId(config){ return Number(config.ownerId || 0); }
function isOwner(userId, config){ return Number(userId) === ownerId(config) && ownerId(config) > 0; }
function can(userId, perm, config){ return isOwner(userId, config) || admins.has(userId, ownerId(config), perm); }
function audit(actor, action, target='', meta={}){
  db.prepare('INSERT INTO admin_audit(actor_id,action,target_id,meta) VALUES(?,?,?,?)').run(Number(actor), action, String(target||''), JSON.stringify(meta));
}
function ensureTables(){
 db.exec(`
 CREATE TABLE IF NOT EXISTS achievements (id INTEGER PRIMARY KEY AUTOINCREMENT, code TEXT UNIQUE, title TEXT, description TEXT, reward INTEGER DEFAULT 0);
 CREATE TABLE IF NOT EXISTS user_achievements (user_id INTEGER, achievement_id INTEGER, unlocked_at TEXT DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY(user_id,achievement_id));
 CREATE TABLE IF NOT EXISTS quests (id INTEGER PRIMARY KEY AUTOINCREMENT, code TEXT UNIQUE, title TEXT, description TEXT, reward INTEGER DEFAULT 0, active INTEGER DEFAULT 1);
 CREATE TABLE IF NOT EXISTS user_quests (user_id INTEGER, quest_id INTEGER, progress INTEGER DEFAULT 0, completed INTEGER DEFAULT 0, updated_at TEXT DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY(user_id,quest_id));
 CREATE TABLE IF NOT EXISTS clans (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT UNIQUE, owner_id INTEGER, created_at TEXT DEFAULT CURRENT_TIMESTAMP);
 CREATE TABLE IF NOT EXISTS clan_members (clan_id INTEGER, user_id INTEGER, rank TEXT DEFAULT 'member', joined_at TEXT DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY(clan_id,user_id));
 CREATE TABLE IF NOT EXISTS referrals_v2 (referrer_id INTEGER, referred_id INTEGER PRIMARY KEY, reward INTEGER DEFAULT 0, created_at TEXT DEFAULT CURRENT_TIMESTAMP);
 CREATE TABLE IF NOT EXISTS bot_settings (key TEXT PRIMARY KEY, value TEXT NOT NULL, updated_at TEXT DEFAULT CURRENT_TIMESTAMP);
 CREATE TABLE IF NOT EXISTS broadcast_log (id INTEGER PRIMARY KEY AUTOINCREMENT, actor_id INTEGER, total INTEGER, sent INTEGER, failed INTEGER, created_at TEXT DEFAULT CURRENT_TIMESTAMP);
 CREATE TABLE IF NOT EXISTS game_events (id INTEGER PRIMARY KEY AUTOINCREMENT, game_id TEXT, chat_id INTEGER, type TEXT, payload TEXT, created_at TEXT DEFAULT CURRENT_TIMESTAMP);
 `);
}
function setting(key, fallback=''){
 const r=db.prepare('SELECT value FROM bot_settings WHERE key=?').get(key);
 return r ? r.value : fallback;
}
function setSetting(key,value){db.prepare('INSERT INTO bot_settings(key,value,updated_at) VALUES(?,?,CURRENT_TIMESTAMP) ON CONFLICT(key) DO UPDATE SET value=excluded.value,updated_at=CURRENT_TIMESTAMP').run(key,String(value));}
function health(config){return {status:'ok',uptime:process.uptime(),memory:process.memoryUsage().rss,host:os.hostname(),node:process.version,db:config.databasePath,time:new Date().toISOString()};}
function tokenHash(token){return crypto.createHash('sha256').update(token).digest('hex');}
function bootstrap(){
 ensureTables();
 const achievements=[['first_game','🎮 Birinchi o‘yin','Birinchi Mafia o‘yinini yakunlang',50],['first_win','🏆 Birinchi g‘alaba','Birinchi g‘alabangizni qo‘lga kiriting',100],['ten_wins','👑 10 g‘alaba','10 ta g‘alabaga erishing',500],['veteran','⚔️ Veteran','50 ta o‘yin o‘ynang',1000]];
 const q=db.prepare('INSERT OR IGNORE INTO achievements(code,title,description,reward) VALUES(?,?,?,?)');
 for(const a of achievements)q.run(...a);
 const quests=[['daily_game','🎯 Daily Game','Bugun 1 ta o‘yin o‘ynang',100],['daily_win','🏆 Daily Win','Bugun 1 ta o‘yin yuting',250],['invite_friend','🤝 Invite Friend','Bitta yangi do‘st taklif qiling',200]];
 const qq=db.prepare('INSERT OR IGNORE INTO quests(code,title,description,reward) VALUES(?,?,?,?)');
 for(const x of quests)qq.run(...x);
}
function stats(){
 const q=s=>db.prepare(s).get()||{};
 return {users:q('SELECT COUNT(*) c FROM users').c||0,games:q('SELECT COUNT(*) c FROM games').c||0,activeGames:q("SELECT COUNT(*) c FROM games WHERE state IN ('lobby','running')").c||0,transactions:q('SELECT COUNT(*) c FROM transactions').c||0,admins:q('SELECT COUNT(*) c FROM admins WHERE enabled=1').c||0,clans:q('SELECT COUNT(*) c FROM clans').c||0,achievements:q('SELECT COUNT(*) c FROM user_achievements').c||0,banned:q('SELECT COUNT(*) c FROM banned_users WHERE enabled=1').c||0};
}
function cleanup(){
 db.prepare("DELETE FROM games WHERE state IN ('ended','finished') AND ended_at IS NOT NULL AND ended_at < datetime('now','-7 day')").run();
 db.prepare("DELETE FROM game_events WHERE created_at < datetime('now','-30 day')").run();
}
module.exports={ownerId,isOwner,can,audit,ensureTables,setting,setSetting,health,tokenHash,bootstrap,stats,cleanup};
