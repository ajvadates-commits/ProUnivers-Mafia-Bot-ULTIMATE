const db=require("../database");
const config=require("../config");
function product(name){const prices={vip:config.monetization.vipPriceStars,pro:config.monetization.proPriceStars,premium_sticker:config.monetization.premiumStickerPriceStars}; if(name==="clone") return require("./economyPrices").get().clone_price||config.monetization.clonePriceStars; return prices[name]||0;}
function grant(userId,name){db.prepare(`INSERT INTO entitlements(user_id,${name==="vip"?"vip":name==="pro"?"pro":"premium_sticker"}) VALUES(?,1) ON CONFLICT(user_id) DO UPDATE SET ${name==="vip"?"vip":name==="pro"?"pro":"premium_sticker"}=1,updated_at=CURRENT_TIMESTAMP`).run(userId);}
function get(userId){return db.prepare("SELECT * FROM entitlements WHERE user_id=?").get(userId)||{user_id:userId,vip:0,pro:0,premium_sticker:0};}
function wallet(){return db.prepare("SELECT stars_balance FROM bot_wallet WHERE id=1").get()?.stars_balance||0;}
module.exports={product,grant,get,wallet};
