const db=require("../database");
async function balance(id){return (await db.prepare("SELECT coins FROM users WHERE id=?").get(id))?.coins||0;}
async function change(id,amount,type,meta={}){await db.transaction(async (tx)=>{await tx.prepare("UPDATE users SET coins=coins+? WHERE id=?").run(amount,id);await tx.prepare("INSERT INTO transactions(user_id,amount,type,meta) VALUES(?,?,?,?)").run(id,amount,type,JSON.stringify(meta));});}
async function history(id,limit=20){return await db.prepare("SELECT * FROM transactions WHERE user_id=? ORDER BY id DESC LIMIT ?").all(id,limit);}
async function recordPurchase(userId,product,stars,chargeId){
  if(chargeId){
    const existing=await db.prepare("SELECT id FROM purchases WHERE telegram_payment_charge_id=?").get(String(chargeId));
    if(existing)return false;
  }
  await db.transaction(async (tx)=>{
    await tx.prepare("INSERT INTO purchases(user_id,product,stars,telegram_payment_charge_id) VALUES(?,?,?,?)").run(userId,product,stars,chargeId||"");
    await tx.prepare("UPDATE bot_wallet SET stars_balance=stars_balance+?,updated_at=CURRENT_TIMESTAMP WHERE id=1").run(stars);
  });
  return true;
}
async function wallet(){return await db.prepare("SELECT * FROM bot_wallet WHERE id=1").get();}
module.exports={balance,change,history,recordPurchase,wallet};