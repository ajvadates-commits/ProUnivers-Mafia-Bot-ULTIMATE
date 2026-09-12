const db=require("../database");
async function upsert(id,title){await db.prepare(`INSERT INTO "groups"(id,title) VALUES(?,?) ON CONFLICT(id) DO UPDATE SET title=excluded.title`).run(id,title||"");}
async function get(id){return await db.prepare('SELECT * FROM "groups" WHERE id=?').get(id);}
async function incrementGames(id){await db.prepare('UPDATE "groups" SET games=games+1 WHERE id=?').run(id);}
function scopeId(cloneId){return Number(cloneId||0);}
async function requiredChannels(cloneId=0){return await db.prepare("SELECT * FROM required_channels WHERE enabled=1 AND clone_id=? ORDER BY id").all(scopeId(cloneId));}
async function addRequiredChannel(chatId,title,inviteLink,cloneId=0){const c=scopeId(cloneId); await db.prepare("INSERT INTO required_channels(chat_id,title,invite_link,clone_id,enabled) VALUES(?,?,?,?,1) ON CONFLICT(chat_id,clone_id) DO UPDATE SET title=excluded.title,invite_link=excluded.invite_link,enabled=1").run(String(chatId),title||"",inviteLink||"",c);}
async function removeRequiredChannel(chatId,cloneId=0){await db.prepare("UPDATE required_channels SET enabled=0 WHERE chat_id=? AND clone_id=?").run(String(chatId),scopeId(cloneId));}
module.exports={upsert,get,incrementGames,scopeId,requiredChannels,addRequiredChannel,removeRequiredChannel};