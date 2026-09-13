const TelegramBot = require("node-telegram-bot-api");
const http = require("http");
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const config = require("./config");
const { validateConfig } = config;
const db = require("./database");
const start = require("./handlers/start");
const profile = require("./handlers/profile");
const language = require("./handlers/language");
const game = require("./handlers/game");
const roles = require("./handlers/roles");
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
const gifCapture = require("./handlers/gifCapture");
const productionService = require("./services/production");

validateConfig();
if (!config.token) {
  logger.error("BOT_TOKEN is missing. Copy .env.example to .env and configure it.");
  process.exit(1);
}

const WEBAPP_DIR=path.join(__dirname,"webapp");
const WEBAPP_MIME={".html":"text/html; charset=utf-8",".js":"text/javascript",".css":"text/css",".json":"application/json",".png":"image/png",".jpg":"image/jpeg",".svg":"image/svg+xml",".ico":"image/x-icon"};
function tgSecret(){return crypto.createHmac("sha256","WebAppData").update(String(config.token)).digest();}
function tgVerify(initData){
  try{
    const pairs=initData.split("&").map(p=>{const i=p.indexOf("=");return [decodeURIComponent(p.slice(0,i)),decodeURIComponent(p.slice(i+1))];});
    const hash=pairs.find(p=>p[0]==="hash");const data=pairs.filter(p=>p[0]!=="hash").sort((a,b)=>a[0].localeCompare(b[0])).map(p=>p[0]+"="+p[1]).join("\n");
    const calc=crypto.createHmac("sha256",tgSecret()).update(data).digest("hex");
    if(!hash||calc!==hash[1])return null;
    const user=JSON.parse(pairs.find(p=>p[0]==="user")[1]);
    return {valid:true,user,auth_date:Number(pairs.find(p=>p[0]==="auth_date")[1])};
  }catch(_){return null;}
}
function serveWebapp(req,res,url){
  let p=url;
  if(url==="/"||url==="/app"||url==="/app/")p="/app/index.html";
  if(url==="/app.js")p="/app/app.js";
  const f=path.join(WEBAPP_DIR,p.replace(/^\/?app\/?/,""));
  if(!f.startsWith(WEBAPP_DIR)){res.writeHead(403);return res.end("403");}
  fs.readFile(f,(err,body)=>{
    if(err){res.writeHead(404,{"Content-Type":"text/plain; charset=utf-8"});return res.end("404 — Mini App fayli topilmadi");}
    res.writeHead(200,{"Content-Type":WEBAPP_MIME[path.extname(f).toLowerCase()]||"text/plain"});res.end(body);
  });
}
const healthServer = http.createServer((req,res)=>{
  const url=(req.url||"/").split("?")[0];
  const json=(obj)=>{res.writeHead(200,{"Content-Type":"application/json"});res.end(JSON.stringify(obj));};
  if(url==="/"||url==="/app"||url==="/app/"||url==="/app.js"||url==="/app/app.js"||url==="/app/index.html")return serveWebapp(req,res,url);
  if(url==="/app/api/profile"){
    const initData=(req.url||"").split("?")[1]||"";
    const qs=new URLSearchParams(initData);
    const v=tgVerify(qs.get("initData")||"");
    if(!v){json({ok:false,error:"Invalid initData"});return;}
    const id=String(v.user.id||qs.get("id")||"");
    (async()=>{
      let row=null;try{row=await db.prepare("SELECT id,username,first_name,language,coins,money,diamonds,xp,level,games,wins,losses,created_at,updated_at FROM users WHERE id=?").get(Number(id))||null;}catch(_){}
      const u={
        id:id,first_name:v.user.first_name||row?.first_name||"Mafia o'yinchi",username:v.user.username||row?.username||"",
        photo_url:v.user.photo_url||null,language_code:v.user.language_code||row?.language||"uz",
        level:row?.level||1,xp:row?.xp||0,xpNeeded:(row?.level||1)*100,
        coins:row?.coins||0,money:row?.money||0,diamonds:row?.diamonds||0,
        games:row?.games||0,wins:row?.wins||0,losses:row?.losses||0,
        winRate:row&&row.games>0?Math.round(row.wins/row.games*100):0,
        isOwner:(config.ownerIds||[]).includes(Number(id))
      };
      try{await db.prepare("INSERT INTO users(id,username,first_name,updated_at) VALUES(?,?,?,CURRENT_TIMESTAMP) ON CONFLICT(id) DO UPDATE SET username=excluded.username,first_name=excluded.first_name,updated_at=CURRENT_TIMESTAMP").run(Number(id),u.username,u.first_name);}catch(_){}
      json({ok:true,user:u});
    })();
    return;
  }
  if(url==="/app/api/groups"){
    const initData=(req.url||"").split("?")[1]||"";
    const qs=new URLSearchParams(initData);
    const uid=Number(qs.get("user_id")||0);
    (async()=>{
      let groups=[];
      try{
        groups=await db.prepare(`SELECT g.id,g.title,g.games as total_games,COUNT(DISTINCT gp.game_id) as user_games FROM game_players gp JOIN games gm ON gp.game_id=gm.id JOIN "groups" g ON gm.chat_id=g.id WHERE gp.user_id=? GROUP BY g.id ORDER BY user_games DESC LIMIT 20`).all(uid);
      }catch(_){}
      json({ok:true,groups:groups});
    })();
    return;
  }
  if(url==="/app/api/leaderboard"){
    (async()=>{
      let top=[];
      try{
        top=await db.prepare("SELECT id,first_name,username,wins,level,xp,games FROM users ORDER BY wins DESC,xp DESC LIMIT 50").all();
      }catch(_){}
      json({ok:true,top:top});
    })();
    return;
  }
  if(url==="/app/api/activity"){
    const initData=(req.url||"").split("?")[1]||"";
    const qs=new URLSearchParams(initData);
    const uid=Number(qs.get("user_id")||0);
    (async()=>{
      let acts=[];
      try{
        acts=await db.prepare("SELECT action,detail,created_at FROM user_activity WHERE user_id=? ORDER BY created_at DESC LIMIT 30").all(uid);
      }catch(_){}
      json({ok:true,activity:acts});
    })();
    return;
  }
  if(url==="/app/api/gifs"){
    let gifs={};
    try{gifs=JSON.parse(fs.readFileSync(path.join(__dirname,"gif_ids.json"),"utf8"));}catch(_){}
    json({ok:true,gifs:gifs});
    return;
  }
  if(url==="/app/api/owner"){
    const initData=(req.url||"").split("?")[1]||"";
    const qs=new URLSearchParams(initData);
    const uid=Number(qs.get("user_id")||0);
    if(!(config.ownerIds||[]).includes(uid)){json({ok:false,error:"Not owner"});return;}
    (async()=>{
      const stats={users:0,games:0,wins:0,revenue:0,activeGames:0,banned:0};
      try{stats.users=(await db.prepare("SELECT COUNT(*) as c FROM users").get()).c;}catch(_){}
      try{stats.games=(await db.prepare("SELECT COUNT(*) as c FROM games").get()).c;}catch(_){}
      try{stats.wins=(await db.prepare("SELECT SUM(wins) as c FROM users").get()).c||0;}catch(_){}
      try{stats.revenue=(await db.prepare("SELECT stars_balance FROM bot_wallet WHERE id=1").get())?.stars_balance||0;}catch(_){}
      try{stats.activeGames=(await db.prepare("SELECT COUNT(*) as c FROM games WHERE state IN ('lobby','running')").get()).c;}catch(_){}
      try{stats.banned=(await db.prepare("SELECT COUNT(*) as c FROM banned_users").get()).c;}catch(_){}
      let recentGames=[];
      try{recentGames=await db.prepare("SELECT g.id,g.chat_id,g.state,g.phase,g.created_at FROM games g ORDER BY g.created_at DESC LIMIT 10").all();}catch(_){}
      let topUsers=[];
      try{topUsers=await db.prepare("SELECT id,first_name,username,wins,level,coins FROM users ORDER BY wins DESC LIMIT 10").all();}catch(_){}
      json({ok:true,stats,recentGames,topUsers});
    })();
    return;
  }
  json({status:"ok",service:"mafia-bot",path:req.url||"/",time:new Date().toISOString()});
});
healthServer.listen(Number(process.env.PORT||3000),"0.0.0.0",()=>logger.info(`Health+MiniApp server listening on ${process.env.PORT||3000}`));

const bot = new TelegramBot(config.token, { polling: true });

bot.setMyCommands([
  {command:"start",description:"Ro'yxatdan o'tish / Botni ishga tushirish"},
  {command:"game",description:"O'yin boshlash"},
  {command:"mafia",description:"O'yin boshlash"},
  {command:"stop",description:"O'yni to'xtatish (admin)"},
  {command:"extend",description:"Ro'yxat vaqtini uzaytirish (admin)"},
  {command:"utag",description:"Qo'shilganlarni chaqirish (admin)"},
  {command:"kick",description:"O'yinchini chiqarish (admin)"},
  {command:"leave",description:"O'yindan chiqish (Premium)"},
  {command:"my_role",description:"Joriy rolingiz"},
  {command:"roles",description:"Barcha rollar"},
  {command:"settings",description:"Guruh sozlamalari (admin)"},
  {command:"top",description:"Guruh top o'yinchilari"},
  {command:"checkbot",description:"Bot huquqlarini tekshirish"},
  {command:"help",description:"Yordam"},
]).catch(()=>{});

bot.setMyCommands([
  {command:"start",description:"Bosh menyu"},
  {command:"profile",description:"Balans va statistika"},
  {command:"pro",description:"Premium (VIP) sotib olish"},
  {command:"menu",description:"Menyu"},
  {command:"language",description:"Til o'zgartirish"},
  {command:"shop",description:"Do'kon"},
  {command:"referrals",description:"Takliflar"},
  {command:"help",description:"Yordam"},
],{scope:{type:"BotCommandScopeAllPrivateChats"}}).catch(()=>{});

bot.setMyCommands([
  {command:"start",description:"Ro'yxatdan o'tish / Botni ishga tushirish"},
  {command:"game",description:"O'yin boshlash"},
  {command:"mafia",description:"O'yin boshlash"},
  {command:"stop",description:"O'yni to'xtatish (admin)"},
  {command:"extend",description:"Ro'yxat vaqtini uzaytirish (admin)"},
  {command:"utag",description:"Qo'shilganlarni chaqirish (admin)"},
  {command:"kick",description:"O'yinchini chiqarish (admin)"},
  {command:"leave",description:"O'yindan chiqish (Premium)"},
  {command:"my_role",description:"Joriy rolingiz"},
  {command:"roles",description:"Barcha rollar"},
  {command:"settings",description:"Guruh sozlamalari (admin)"},
  {command:"top",description:"Guruh top o'yinchilari"},
  {command:"checkbot",description:"Bot huquqlarini tekshirish"},
  {command:"help",description:"Yordam"},
],{scope:{type:"BotCommandScopeAllGroupChats"}}).catch(()=>{});

const ctx = { bot, db, config, logger, advancedSuite };

start.register(ctx);
profile.register(ctx);
language.register(ctx);
game.register(ctx);
roles.register(ctx);
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
gifCapture.register(ctx);

bot.on("polling_error", (err) => logger.error("Polling error", err));
bot.on("message", (msg) => {
  if(!msg.from||!msg.text)return;
  const uid=msg.from.id;
  const txt=msg.text||"";
  let action="message";
  if(txt.startsWith("/"))action="command:"+txt.split(" ")[0].split("@")[0];
  else if(txt==="Profil"||txt==="Профиль")action="button:profile";
  else if(txt==="O'yin yaratish"||txt==="Создать игру")action="button:create";
  else if(txt==="🌐 Til"||txt==="🌐 Язык")action="button:language";
  else action="text:"+txt.substring(0,50);
  db.prepare("INSERT INTO user_activity(user_id,action,detail) VALUES(?,?,?)").run(uid,action,txt.substring(0,200)).catch(()=>{});
});
cloneRunner.startAll().catch(e=>logger.error("Clone startup failed",e));
productionService.bootstrap().catch(e=>logger.error("Production bootstrap failed",e));
setInterval(()=>{ productionService.cleanup().catch(e=>logger.error('Cleanup failed',e)); }, 6*60*60*1000).unref();
logger.info("Mafia bot started 24/7 production mode.");

process.on("SIGINT", async () => { bot.stopPolling(); await db.close(); healthServer.close(()=>{}); process.exit(0); });
process.on("SIGTERM", async () => { bot.stopPolling(); await db.close(); healthServer.close(()=>{}); process.exit(0); });
