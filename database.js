const Database = require("better-sqlite3");
const fs = require("fs");
const path = require("path");
const config = require("./config");

const dir = path.dirname(config.databasePath);
fs.mkdirSync(dir, { recursive: true });

const db = new Database(config.databasePath);
db.pragma("journal_mode = WAL");
db.pragma("foreign_keys = ON");

db.exec(`
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY,
  username TEXT,
  first_name TEXT,
  language TEXT DEFAULT 'uz',
  coins INTEGER DEFAULT 0,
  money INTEGER DEFAULT 0,
  diamonds INTEGER DEFAULT 0,
  xp INTEGER DEFAULT 0,
  level INTEGER DEFAULT 1,
  games INTEGER DEFAULT 0,
  wins INTEGER DEFAULT 0,
  losses INTEGER DEFAULT 0,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS groups (
  id INTEGER PRIMARY KEY,
  title TEXT,
  language TEXT DEFAULT 'uz',
  games INTEGER DEFAULT 0,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS games (
  id TEXT PRIMARY KEY,
  chat_id INTEGER NOT NULL,
  state TEXT NOT NULL,
  phase TEXT NOT NULL,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  ended_at TEXT
);
CREATE TABLE IF NOT EXISTS game_players (
  game_id TEXT NOT NULL,
  user_id INTEGER NOT NULL,
  role TEXT,
  alive INTEGER DEFAULT 1,
  PRIMARY KEY (game_id, user_id),
  FOREIGN KEY(game_id) REFERENCES games(id) ON DELETE CASCADE
);
CREATE TABLE IF NOT EXISTS transactions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  amount INTEGER NOT NULL,
  type TEXT NOT NULL,
  meta TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS required_channels (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  chat_id TEXT NOT NULL,
  title TEXT,
  invite_link TEXT,
  enabled INTEGER DEFAULT 1,
  clone_id INTEGER DEFAULT 0,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(chat_id, clone_id)
);
CREATE TABLE IF NOT EXISTS purchases (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  product TEXT NOT NULL,
  stars INTEGER NOT NULL,
  telegram_payment_charge_id TEXT,
  status TEXT DEFAULT 'paid',
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS entitlements (
  user_id INTEGER PRIMARY KEY,
  vip INTEGER DEFAULT 0,
  pro INTEGER DEFAULT 0,
  premium_sticker INTEGER DEFAULT 0,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS bot_wallet (
  id INTEGER PRIMARY KEY CHECK(id=1),
  stars_balance INTEGER DEFAULT 0,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP
);
INSERT OR IGNORE INTO bot_wallet(id,stars_balance) VALUES(1,0);
CREATE TABLE IF NOT EXISTS economy_prices (
  id INTEGER PRIMARY KEY CHECK(id=1),
  money INTEGER DEFAULT 10,
  diamond INTEGER DEFAULT 50,
  coin INTEGER DEFAULT 100,
  clone_price INTEGER DEFAULT 100,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP
);
INSERT OR IGNORE INTO economy_prices(id,money,diamond,coin,clone_price) VALUES(1,10,50,100,100);
CREATE TABLE IF NOT EXISTS bot_rights_audit (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  chat_id TEXT NOT NULL,
  bot_id INTEGER,
  ok INTEGER NOT NULL,
  missing TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS admins (
  user_id INTEGER NOT NULL,
  owner_id INTEGER NOT NULL,
  username TEXT,
  permissions TEXT DEFAULT '[]',
  enabled INTEGER DEFAULT 1,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(user_id,owner_id)
);
CREATE TABLE IF NOT EXISTS clones (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  owner_id INTEGER NOT NULL,
  token_cipher TEXT NOT NULL,
  bot_id TEXT UNIQUE NOT NULL,
  username TEXT,
  first_name TEXT,
  status TEXT DEFAULT 'active',
  last_error TEXT DEFAULT '',
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS clone_credits (
  owner_id INTEGER PRIMARY KEY,
  credits INTEGER DEFAULT 0,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS clone_activity (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  clone_id INTEGER NOT NULL,
  type TEXT NOT NULL,
  chat_id TEXT,
  user_id INTEGER,
  meta TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY(clone_id) REFERENCES clones(id) ON DELETE CASCADE
);
CREATE TABLE IF NOT EXISTS banned_users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  reason TEXT,
  enabled INTEGER DEFAULT 1,
  clone_id INTEGER DEFAULT 0,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_id, clone_id)
);
CREATE TABLE IF NOT EXISTS admin_audit (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  actor_id INTEGER NOT NULL,
  action TEXT NOT NULL,
  target_id TEXT,
  meta TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS referrals (
  referrer_id INTEGER NOT NULL,
  referred_id INTEGER PRIMARY KEY,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);
`);


// Lightweight migrations for older databases.
const userColumns=db.prepare('PRAGMA table_info(users)').all().map(x=>x.name);
if(userColumns.length){
  if(!userColumns.includes('money')) db.exec('ALTER TABLE users ADD COLUMN money INTEGER DEFAULT 0');
  if(!userColumns.includes('diamonds')) db.exec('ALTER TABLE users ADD COLUMN diamonds INTEGER DEFAULT 0');
}

// Lightweight migration for projects created before owner-scoped admin permissions.
const adminColumns=db.prepare('PRAGMA table_info(admins)').all().map(x=>x.name);
if(adminColumns.length && !adminColumns.includes('owner_id')){
  db.exec(`ALTER TABLE admins RENAME TO admins_legacy;
  CREATE TABLE admins (user_id INTEGER NOT NULL, owner_id INTEGER NOT NULL, username TEXT, permissions TEXT DEFAULT '[]', enabled INTEGER DEFAULT 1, created_at TEXT DEFAULT CURRENT_TIMESTAMP, updated_at TEXT DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY(user_id,owner_id));`);
  db.prepare(`INSERT INTO admins(user_id,owner_id,username,permissions,enabled,created_at,updated_at) SELECT user_id,?,?,?, ?,created_at,updated_at FROM admins_legacy`).run(config.ownerId, '', '[]', 1);
  db.exec('DROP TABLE admins_legacy;');
}

// Scope migrations: required channels and bans must be independent per bot/clone.
function hasSingleColumnPrimary(table,col){return db.prepare(`PRAGMA table_info(${table})`).all().some(x=>x.name===col && x.pk===1);}
if(hasSingleColumnPrimary('required_channels','chat_id')){
 db.exec(`ALTER TABLE required_channels RENAME TO required_channels_legacy;
 CREATE TABLE required_channels (id INTEGER PRIMARY KEY AUTOINCREMENT, chat_id TEXT NOT NULL, title TEXT, invite_link TEXT, enabled INTEGER DEFAULT 1, clone_id INTEGER DEFAULT 0, created_at TEXT DEFAULT CURRENT_TIMESTAMP, UNIQUE(chat_id,clone_id));
 INSERT INTO required_channels(id,chat_id,title,invite_link,enabled,clone_id,created_at) SELECT id,chat_id,title,invite_link,enabled,0,created_at FROM required_channels_legacy;
 DROP TABLE required_channels_legacy;`);
}
if(hasSingleColumnPrimary('banned_users','user_id')){
 db.exec(`ALTER TABLE banned_users RENAME TO banned_users_legacy;
 CREATE TABLE banned_users (id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INTEGER NOT NULL, actor_id INTEGER NOT NULL, reason TEXT, enabled INTEGER DEFAULT 1, clone_id INTEGER DEFAULT 0, created_at TEXT DEFAULT CURRENT_TIMESTAMP, updated_at TEXT DEFAULT CURRENT_TIMESTAMP, UNIQUE(user_id,clone_id));
 INSERT INTO banned_users(user_id,actor_id,reason,enabled,clone_id,created_at,updated_at) SELECT user_id,actor_id,reason,enabled,0,created_at,updated_at FROM banned_users_legacy;
 DROP TABLE banned_users_legacy;`);
}
const rcColumns=db.prepare('PRAGMA table_info(required_channels)').all().map(x=>x.name);
if(rcColumns.length && !rcColumns.includes('clone_id')){ db.exec('ALTER TABLE required_channels ADD COLUMN clone_id INTEGER DEFAULT 0'); }
const banColumns=db.prepare('PRAGMA table_info(banned_users)').all().map(x=>x.name);
if(banColumns.length && !banColumns.includes('clone_id')){ db.exec('ALTER TABLE banned_users ADD COLUMN clone_id INTEGER DEFAULT 0'); }
module.exports = db;
