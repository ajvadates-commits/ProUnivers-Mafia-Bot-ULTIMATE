const db = require("../database");
function upsert(user) {
  db.prepare(`INSERT INTO users(id,username,first_name) VALUES(?,?,?)
    ON CONFLICT(id) DO UPDATE SET username=excluded.username, first_name=excluded.first_name, updated_at=CURRENT_TIMESTAMP`)
    .run(user.id, user.username || "", user.first_name || "");
}
function get(id) { return db.prepare("SELECT * FROM users WHERE id=?").get(id); }
function setLanguage(id, lang) { db.prepare("UPDATE users SET language=?,updated_at=CURRENT_TIMESTAMP WHERE id=?").run(lang,id); }
function addXp(id, amount) { db.prepare("UPDATE users SET xp=xp+?, level=1+(xp+?)/100 WHERE id=?").run(amount,amount,id); }
function addWin(id) { db.prepare("UPDATE users SET wins=wins+1,games=games+1 WHERE id=?").run(id); }
function addMoney(id,amount){db.prepare("UPDATE users SET money=money+?,updated_at=CURRENT_TIMESTAMP WHERE id=?").run(Number(amount),id);}
function addCoins(id,amount){db.prepare("UPDATE users SET coins=coins+?,updated_at=CURRENT_TIMESTAMP WHERE id=?").run(Number(amount),id);}
function addDiamonds(id,amount){db.prepare("UPDATE users SET diamonds=diamonds+?,updated_at=CURRENT_TIMESTAMP WHERE id=?").run(Number(amount),id);}
function wallet(id){return db.prepare("SELECT money,coins,diamonds FROM users WHERE id=?").get(id)||{money:0,coins:0,diamonds:0};}
function addLoss(id) { db.prepare("UPDATE users SET losses=losses+1,games=games+1 WHERE id=?").run(id); }
module.exports = { upsert,get,setLanguage,addXp,addWin,addLoss,addMoney,addCoins,addDiamonds,wallet };
