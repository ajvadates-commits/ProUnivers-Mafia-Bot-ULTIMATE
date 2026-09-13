const db=require("../database");
const config=require("../config");
const admins=require("../database/admins");
async function product(name){const prices={vip:config.monetization.vipPriceStars,pro:config.monetization.proPriceStars,premium_sticker:config.monetization.premiumStickerPriceStars}; if(name==="clone") return (await require("./economyPrices").get()).clone_price||config.monetization.clonePriceStars; return prices[name]||0;}
async function grant(userId,name){const col=name==="vip"?"vip":name==="pro"?"pro":"premium_sticker";await db.prepare(`INSERT INTO entitlements(user_id,${col}) VALUES(?,1) ON CONFLICT(user_id) DO UPDATE SET ${col}=1,updated_at=CURRENT_TIMESTAMP`).run(userId);}
async function get(userId){
  const row=(await db.prepare("SELECT * FROM entitlements WHERE user_id=?").get(userId))||{user_id:userId,vip:0,pro:0,premium_sticker:0};
  const n=Number(userId);
  const isOwner=config.ownerIds?config.ownerIds.includes(n):n===Number(config.ownerId);
  if(isOwner) return {...row,vip:1,pro:1,premium_sticker:1};
  const isAdmin=await admins.has(n,config.ownerId,'vip');
  if(isAdmin) return {...row,vip:1,pro:1,premium_sticker:1};
  return row;
}
async function wallet(){return (await db.prepare("SELECT stars_balance FROM bot_wallet WHERE id=1").get())?.stars_balance||0;}
module.exports={product,grant,get,wallet};
