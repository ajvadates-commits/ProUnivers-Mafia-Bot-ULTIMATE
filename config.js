require("dotenv").config();

const config = {
  token: process.env.BOT_TOKEN || "",
  admins: (process.env.ADMIN_IDS || "").split(",").map(Number).filter(Boolean),
  ownerId: Number(process.env.OWNER_ID || 0),
  databasePath: process.env.DATABASE_PATH || "./data/mafia.sqlite",
  defaultLanguage: process.env.DEFAULT_LANGUAGE || "uz",
  security: {
    requireBotAdminRights: String(process.env.REQUIRE_BOT_ADMIN_RIGHTS || "true").toLowerCase() === "true",
    requireAllAdminRights: String(process.env.REQUIRE_ALL_ADMIN_RIGHTS || "true").toLowerCase() === "true"
  },
  minPlayers: Number(process.env.MIN_PLAYERS || 5),
  maxPlayers: Number(process.env.MAX_PLAYERS || 35),
  game: { lobbySeconds: 90, nightSeconds: 45, daySeconds: 90, voteSeconds: 45 },
  monetization: {
    vipPriceStars: Number(process.env.VIP_PRICE_STARS || 100),
    proPriceStars: Number(process.env.PRO_PRICE_STARS || 250),
    premiumStickerPriceStars: Number(process.env.PREMIUM_STICKER_PRICE_STARS || 50),
    clonePriceStars: Number(process.env.CLONE_PRICE_STARS || 100),
    currencyPrices: {
      money: Number(process.env.MONEY_PRICE || 10),
      diamond: Number(process.env.DIAMOND_PRICE || 50),
      coin: Number(process.env.COIN_PRICE || 100)
    }
  }
};
function validateConfig() {
  if (!config.token) console.warn("[CONFIG] BOT_TOKEN is not configured.");
  if (config.minPlayers < 3) throw new Error("MIN_PLAYERS must be >= 3");
  if (config.maxPlayers < config.minPlayers) throw new Error("MAX_PLAYERS must be >= MIN_PLAYERS");
}
module.exports=Object.freeze({...config,validateConfig});
