const db=require("../database");
const config=require("../config");
function get(){return db.prepare("SELECT money,diamond,coin FROM economy_prices WHERE id=1").get()||config.monetization.currencyPrices;}
function set(name,value){if(!["money","diamond","coin","clone_price"].includes(name)) throw new Error("Noto‘g‘ri valuta"); const n=Math.max(0,Math.floor(Number(value))); if(!Number.isFinite(n)) throw new Error("Narx noto‘g‘ri"); db.prepare(`UPDATE economy_prices SET ${name}=?,updated_at=CURRENT_TIMESTAMP WHERE id=1`).run(n); return get();}
module.exports={get,set};
