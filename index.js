const TelegramBot = require("node-telegram-bot-api");
const http = require("http");
const config = require("./config");
const { validateConfig } = config;
const db = require("./database");
const start = require("./handlers/start");
const profile = require("./handlers/profile");
const language = require("./handlers/language");
const game = require("./handlers/game");
const callback = require("./handlers/callback");
const admin = require("./handlers/admin");
const economy = require("./handlers/economy");
const help = require("./handlers/help");
const guide = require("./handlers/guide");
const owner = require("./handlers/owner");
const menu = require("./handlers/menu");
const group = require("./handlers/group");
const permissions = require("./handlers/permissions");
const ownerTools = require("./handlers/ownerTools");
const cloneRunner=require("./clone/runner");
const logger = require("./utils/logger");
const advancedSuite = require("./advanced");
const production = require("./handlers/production");
const productionService = require("./services/production");

validateConfig();
if (!config.token) {
  logger.error("BOT_TOKEN is missing. Copy .env.example to .env and configure it.");
  process.exit(1);
}

const healthServer = http.createServer((req,res)=>{
  const payload=()=>JSON.stringify({status:"ok",service:"mafia-bot",path:req.url||"/",time:new Date().toISOString()});
  res.writeHead(200,{"Content-Type":"application/json"});res.end(payload());
});
healthServer.listen(Number(process.env.PORT||3000),"0.0.0.0",()=>logger.info(`Health server listening on ${process.env.PORT||3000}`));

const bot = new TelegramBot(config.token, { polling: true });
const ctx = { bot, db, config, logger, advancedSuite };

start.register(ctx);
profile.register(ctx);
language.register(ctx);
game.register(ctx);
callback.register(ctx);
admin.register(ctx);
economy.register(ctx);
help.register(ctx);
guide.register(ctx);
owner.register(ctx);
menu.register(ctx);
group.register(ctx);
permissions.register(ctx);
ownerTools.register(ctx);
production.register(ctx);

bot.on("polling_error", (err) => logger.error("Polling error", err));
cloneRunner.startAll().catch(e=>logger.error("Clone startup failed",e));
productionService.bootstrap().catch(e=>logger.error("Production bootstrap failed",e));
setInterval(()=>{ productionService.cleanup().catch(e=>logger.error('Cleanup failed',e)); }, 6*60*60*1000).unref();
logger.info("Mafia bot started 24/7 production mode.");

process.on("SIGINT", async () => { bot.stopPolling(); await db.close(); healthServer.close(()=>{}); process.exit(0); });
process.on("SIGTERM", async () => { bot.stopPolling(); await db.close(); healthServer.close(()=>{}); process.exit(0); });
