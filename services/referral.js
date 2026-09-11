const db=require("../database");
const economy=require("../database/economy");
function add(referrer,referred){if(referrer===referred)return false;const r=db.prepare("INSERT OR IGNORE INTO referrals(referrer_id,referred_id) VALUES(?,?)").run(referrer,referred);if(r.changes){economy.change(referrer,50,"referral",{referred});return true;}return false;}
function count(id){return db.prepare("SELECT COUNT(*) c FROM referrals WHERE referrer_id=?").get(id).c;}
module.exports={add,count};
