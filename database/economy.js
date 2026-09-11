const db=require("../database");
function balance(id){return db.prepare("SELECT coins FROM users WHERE id=?").get(id)?.coins||0;}
function change(id,amount,type,meta={}){const tx=db.transaction(()=>{db.prepare("UPDATE users SET coins=coins+? WHERE id=?").run(amount,id);db.prepare("INSERT INTO transactions(user_id,amount,type,meta) VALUES(?,?,?,?)").run(id,amount,type,JSON.stringify(meta));});tx();}
function history(id,limit=20){return db.prepare("SELECT * FROM transactions WHERE user_id=? ORDER BY id DESC LIMIT ?").all(id,limit);}
function recordPurchase(userId,product,stars,chargeId){db.prepare("INSERT INTO purchases(user_id,product,stars,telegram_payment_charge_id) VALUES(?,?,?,?)").run(userId,product,stars,chargeId||"");db.prepare("UPDATE bot_wallet SET stars_balance=stars_balance+?,updated_at=CURRENT_TIMESTAMP WHERE id=1").run(stars);}
function wallet(){return db.prepare("SELECT * FROM bot_wallet WHERE id=1").get();}
module.exports={balance,change,history,recordPurchase,wallet};
