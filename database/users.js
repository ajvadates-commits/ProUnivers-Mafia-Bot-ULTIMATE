const db = require("../database");
async function upsert(user) {
  await db.prepare(`INSERT INTO users(id,username,first_name) VALUES(?,?,?)
    ON CONFLICT(id) DO UPDATE SET username=excluded.username, first_name=excluded.first_name, updated_at=CURRENT_TIMESTAMP`)
    .run(user.id, user.username || "", user.first_name || "");
}
async function get(id) { return await db.prepare("SELECT * FROM users WHERE id=?").get(id); }
async function setLanguage(id, lang) { await db.prepare("UPDATE users SET language=?,updated_at=CURRENT_TIMESTAMP WHERE id=?").run(lang,id); }
async function addXp(id, amount) { await db.prepare("UPDATE users SET xp=xp+?, level=1+(xp+?)/100 WHERE id=?").run(amount,amount,id); }
async function addWin(id) { await db.prepare("UPDATE users SET wins=wins+1,games=games+1 WHERE id=?").run(id); }
async function addMoney(id,amount){await db.prepare("UPDATE users SET money=money+?,updated_at=CURRENT_TIMESTAMP WHERE id=?").run(Number(amount),id);}
async function addCoins(id,amount){await db.prepare("UPDATE users SET coins=coins+?,updated_at=CURRENT_TIMESTAMP WHERE id=?").run(Number(amount),id);}
async function addDiamonds(id,amount){await db.prepare("UPDATE users SET diamonds=diamonds+?,updated_at=CURRENT_TIMESTAMP WHERE id=?").run(Number(amount),id);}
async function wallet(id){return (await db.prepare("SELECT money,coins,diamonds FROM users WHERE id=?").get(id))||{money:0,coins:0,diamonds:0};}
async function addLoss(id) { await db.prepare("UPDATE users SET losses=losses+1,games=games+1 WHERE id=?").run(id); }

module.exports={upsert,get,setLanguage,addXp,addWin,addMoney,addCoins,addDiamonds,wallet,addLoss};