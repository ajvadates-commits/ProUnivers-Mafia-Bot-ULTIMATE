const db=require("../database");
function upsert(id,title){db.prepare(`INSERT INTO groups(id,title) VALUES(?,?) ON CONFLICT(id) DO UPDATE SET title=excluded.title`).run(id,title||"");}
function get(id){return db.prepare("SELECT * FROM groups WHERE id=?").get(id);}
function incrementGames(id){db.prepare("UPDATE groups SET games=games+1 WHERE id=?").run(id);}
function scopeId(cloneId){return Number(cloneId||0);}
function requiredChannels(cloneId=0){return db.prepare("SELECT * FROM required_channels WHERE enabled=1 AND clone_id=? ORDER BY id").all(scopeId(cloneId));}
function addRequiredChannel(chatId,title,inviteLink,cloneId=0){const c=scopeId(cloneId); db.prepare("INSERT INTO required_channels(chat_id,title,invite_link,clone_id,enabled) VALUES(?,?,?,?,1) ON CONFLICT(chat_id,clone_id) DO UPDATE SET title=excluded.title,invite_link=excluded.invite_link,enabled=1").run(String(chatId),title||"",inviteLink||"",c);}
function removeRequiredChannel(chatId,cloneId=0){db.prepare("UPDATE required_channels SET enabled=0 WHERE chat_id=? AND clone_id=?").run(String(chatId),scopeId(cloneId));}
module.exports={upsert,get,incrementGames,requiredChannels,addRequiredChannel,removeRequiredChannel};
