const { Pool } = require("pg");
const config = require("./config");

if (!config.databaseUrl) {
  console.error("[DATABASE] DATABASE_URL is missing. Set it to a Neon/PostgreSQL connection string.");
  process.exit(1);
}

const pool = new Pool({
  connectionString: config.databaseUrl,
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 10000,
  ssl: { rejectUnauthorized: false }
});

pool.on("error", (err) => console.error("[DATABASE] PG pool error", err));

function convertPlaceholders(sql) {
  let i = 0;
  return sql.replace(/\?/g, () => `$${++i}`);
}

function normalizeSql(sql) {
  let s = sql.trim().replace(/;\s*$/, "");
  const isOrIgnore = /^\s*insert\s+or\s+ignore\b/i.test(s);
  s = s.replace(/^\s*(insert)\s+or\s+ignore\b/i, "$1");
  if (isOrIgnore) s += " ON CONFLICT DO NOTHING";
  if (/^\s*insert\s+/i.test(s) && !/\breturning\b/i.test(s)) {
    s += " RETURNING *";
  }
  return s;
}

function makeStatement(executor, sql) {
  const runSql = convertPlaceholders(normalizeSql(sql));
  const querySql = convertPlaceholders(sql);
  return {
    async run(...params) {
      const res = await executor.query(runSql, params);
      return {
        rowCount: res.rowCount ?? 0,
        changes: res.rowCount ?? 0,
        lastInsertRowid: res.rows && res.rows[0] ? res.rows[0].id ?? null : null
      };
    },
    async all(...params) {
      return (await executor.query(querySql, params)).rows;
    },
    async get(...params) {
      const res = await executor.query(querySql, params);
      return res.rows[0] ?? null;
    }
  };
}

const db = {
  prepare(sql) { return makeStatement(pool, sql); },
  async exec(sql) { if (sql.trim()) await pool.query(sql); },
  async transaction(fn) {
    const client = await pool.connect();
    try {
      await client.query("BEGIN");
      const tx = { prepare(sql) { return makeStatement(client, sql); } };
      const result = await fn(tx);
      await client.query("COMMIT");
      return result;
    } catch (err) {
      try { await client.query("ROLLBACK"); } catch (_) {}
      throw err;
    } finally {
      client.release();
    }
  },
  async close() { await pool.end(); },
  pool
};

(async () => {
  await db.exec(`
CREATE TABLE IF NOT EXISTS users (
  id BIGINT PRIMARY KEY,
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
CREATE TABLE IF NOT EXISTS "groups" (
  id BIGINT PRIMARY KEY,
  title TEXT,
  language TEXT DEFAULT 'uz',
  games INTEGER DEFAULT 0,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS games (
  id TEXT PRIMARY KEY,
  chat_id BIGINT NOT NULL,
  state TEXT NOT NULL,
  phase TEXT NOT NULL,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  ended_at TEXT
);
CREATE TABLE IF NOT EXISTS game_players (
  game_id TEXT NOT NULL,
  user_id BIGINT NOT NULL,
  role TEXT,
  alive INTEGER DEFAULT 1,
  PRIMARY KEY (game_id, user_id)
);
CREATE TABLE IF NOT EXISTS transactions (
  id SERIAL PRIMARY KEY,
  user_id BIGINT NOT NULL,
  amount INTEGER NOT NULL,
  type TEXT NOT NULL,
  meta TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS required_channels (
  id SERIAL PRIMARY KEY,
  chat_id TEXT NOT NULL,
  title TEXT,
  invite_link TEXT,
  enabled INTEGER DEFAULT 1,
  clone_id INTEGER DEFAULT 0,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(chat_id, clone_id)
);
CREATE TABLE IF NOT EXISTS purchases (
  id SERIAL PRIMARY KEY,
  user_id BIGINT NOT NULL,
  product TEXT NOT NULL,
  stars INTEGER NOT NULL,
  telegram_payment_charge_id TEXT,
  status TEXT DEFAULT 'paid',
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS entitlements (
  user_id BIGINT PRIMARY KEY,
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
INSERT INTO bot_wallet(id,stars_balance) VALUES(1,0) ON CONFLICT DO NOTHING;
CREATE TABLE IF NOT EXISTS economy_prices (
  id INTEGER PRIMARY KEY CHECK(id=1),
  money INTEGER DEFAULT 10,
  diamond INTEGER DEFAULT 50,
  coin INTEGER DEFAULT 100,
  clone_price INTEGER DEFAULT 100,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO economy_prices(id,money,diamond,coin,clone_price) VALUES(1,10,50,100,100) ON CONFLICT DO NOTHING;
CREATE TABLE IF NOT EXISTS bot_rights_audit (
  id SERIAL PRIMARY KEY,
  chat_id TEXT NOT NULL,
  bot_id BIGINT,
  ok INTEGER NOT NULL,
  missing TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS admins (
  user_id BIGINT NOT NULL,
  owner_id BIGINT NOT NULL,
  username TEXT,
  permissions TEXT DEFAULT '[]',
  enabled INTEGER DEFAULT 1,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(user_id,owner_id)
);
CREATE TABLE IF NOT EXISTS clones (
  id SERIAL PRIMARY KEY,
  owner_id BIGINT NOT NULL,
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
  owner_id BIGINT PRIMARY KEY,
  credits INTEGER DEFAULT 0,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS clone_activity (
  id SERIAL PRIMARY KEY,
  clone_id INTEGER NOT NULL,
  type TEXT NOT NULL,
  chat_id TEXT,
  user_id BIGINT,
  meta TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS banned_users (
  id SERIAL PRIMARY KEY,
  user_id BIGINT NOT NULL,
  actor_id BIGINT NOT NULL,
  reason TEXT,
  enabled INTEGER DEFAULT 1,
  clone_id INTEGER DEFAULT 0,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_id, clone_id)
);
CREATE TABLE IF NOT EXISTS admin_audit (
  id SERIAL PRIMARY KEY,
  actor_id BIGINT NOT NULL,
  action TEXT NOT NULL,
  target_id TEXT,
  meta TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS referrals (
  referrer_id BIGINT NOT NULL,
  referred_id BIGINT PRIMARY KEY,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS achievements (
  id SERIAL PRIMARY KEY,
  code TEXT UNIQUE,
  title TEXT,
  description TEXT,
  reward INTEGER DEFAULT 0
);
CREATE TABLE IF NOT EXISTS user_achievements (
  user_id BIGINT,
  achievement_id INTEGER,
  unlocked_at TEXT DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(user_id,achievement_id)
);
CREATE TABLE IF NOT EXISTS quests (
  id SERIAL PRIMARY KEY,
  code TEXT UNIQUE,
  title TEXT,
  description TEXT,
  reward INTEGER DEFAULT 0,
  active INTEGER DEFAULT 1
);
CREATE TABLE IF NOT EXISTS user_quests (
  user_id BIGINT,
  quest_id INTEGER,
  progress INTEGER DEFAULT 0,
  completed INTEGER DEFAULT 0,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(user_id,quest_id)
);
CREATE TABLE IF NOT EXISTS clans (
  id SERIAL PRIMARY KEY,
  name TEXT UNIQUE,
  owner_id BIGINT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS clan_members (
  clan_id INTEGER,
  user_id BIGINT,
  rank TEXT DEFAULT 'member',
  joined_at TEXT DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(clan_id,user_id)
);
CREATE TABLE IF NOT EXISTS referrals_v2 (
  referrer_id BIGINT,
  referred_id BIGINT PRIMARY KEY,
  reward INTEGER DEFAULT 0,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS bot_settings (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS broadcast_log (
  id SERIAL PRIMARY KEY,
  actor_id BIGINT,
  total INTEGER,
  sent INTEGER,
  failed INTEGER,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS game_events (
  id SERIAL PRIMARY KEY,
  game_id TEXT,
  chat_id BIGINT,
  type TEXT,
  payload TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS pro_groups (
  id SERIAL PRIMARY KEY,
  chat_id TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  price INTEGER NOT NULL DEFAULT 100,
  currency TEXT NOT NULL DEFAULT 'coin',
  invite_link TEXT DEFAULT '',
  enabled INTEGER DEFAULT 1,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS giveaways (
  id SERIAL PRIMARY KEY,
  owner_id BIGINT NOT NULL,
  target_chat_id TEXT NOT NULL,
  title TEXT NOT NULL,
  prize_type TEXT NOT NULL,
  prize_amount INTEGER NOT NULL,
  winners_count INTEGER NOT NULL,
  status TEXT NOT NULL DEFAULT 'active',
  ends_at TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS giveaway_entries (
  giveaway_id INTEGER NOT NULL,
  user_id BIGINT NOT NULL,
  username TEXT DEFAULT '',
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(giveaway_id,user_id)
);
`);
})().catch((err) => {
  console.error("[DATABASE] Failed to initialize schema", err);
  process.exit(1);
});

module.exports = db;