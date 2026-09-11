const db=require('../database');
function ensureTables(){db.exec(`
CREATE TABLE IF NOT EXISTS pro_groups (
 id INTEGER PRIMARY KEY AUTOINCREMENT,
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
 id INTEGER PRIMARY KEY AUTOINCREMENT,
 owner_id INTEGER NOT NULL,
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
 user_id INTEGER NOT NULL,
 username TEXT DEFAULT '',
 created_at TEXT DEFAULT CURRENT_TIMESTAMP,
 PRIMARY KEY(giveaway_id,user_id),
 FOREIGN KEY(giveaway_id) REFERENCES giveaways(id) ON DELETE CASCADE
);
`)}
ensureTables();
function addProGroup(chatId,title,price,currency='coin',inviteLink=''){db.prepare(`INSERT INTO pro_groups(chat_id,title,price,currency,invite_link) VALUES(?,?,?,?,?) ON CONFLICT(chat_id) DO UPDATE SET title=excluded.title,price=excluded.price,currency=excluded.currency,invite_link=excluded.invite_link,enabled=1,updated_at=CURRENT_TIMESTAMP`).run(String(chatId),title,Number(price),currency,inviteLink||'');return getProGroup(chatId)}
function getProGroup(chatId){return db.prepare('SELECT * FROM pro_groups WHERE chat_id=?').get(String(chatId))}
function listProGroups(){return db.prepare('SELECT * FROM pro_groups WHERE enabled=1 ORDER BY id DESC').all()}
function removeProGroup(chatId){db.prepare('UPDATE pro_groups SET enabled=0,updated_at=CURRENT_TIMESTAMP WHERE chat_id=?').run(String(chatId))}
function createGiveaway(ownerId,targetChatId,title,prizeType,prizeAmount,winnersCount,endsAt=''){const r=db.prepare('INSERT INTO giveaways(owner_id,target_chat_id,title,prize_type,prize_amount,winners_count,ends_at) VALUES(?,?,?,?,?,?,?)').run(ownerId,String(targetChatId),title,prizeType,Number(prizeAmount),Number(winnersCount),endsAt||null);return getGiveaway(r.lastInsertRowid)}
function getGiveaway(id){return db.prepare('SELECT * FROM giveaways WHERE id=?').get(Number(id))}
function activeGiveaways(){return db.prepare("SELECT * FROM giveaways WHERE status='active' ORDER BY id DESC").all()}
function enterGiveaway(id,user){db.prepare('INSERT OR IGNORE INTO giveaway_entries(giveaway_id,user_id,username) VALUES(?,?,?)').run(Number(id),Number(user.id),user.username||'');return db.changes>0}
function entries(id){return db.prepare('SELECT * FROM giveaway_entries WHERE giveaway_id=? ORDER BY created_at').all(Number(id))}
function finishGiveaway(id){db.prepare("UPDATE giveaways SET status='finished' WHERE id=?").run(Number(id));return getGiveaway(id)}
module.exports={addProGroup,getProGroup,listProGroups,removeProGroup,createGiveaway,getGiveaway,activeGiveaways,enterGiveaway,entries,finishGiveaway};
