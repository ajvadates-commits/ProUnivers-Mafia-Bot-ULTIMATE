const users=require("../database/users");
const games=require("../database/games");
const game=require("./game");
const config=require("../config");
const required=require("../services/requiredChannels");
const moderation=require("../database/moderation");
const fs=require("fs"),path=require("path");
function loadGifs(){try{return JSON.parse(fs.readFileSync(path.join(__dirname,"..","gif_ids.json"),"utf8"));}catch(_){return {}};}
function register({bot,cloneId=0}) {
  bot.on("callback_query", async q=>{
    const [action,value]=q.data.split(":");
    try {
      if(await moderation.isBanned(q.from.id,cloneId)){await bot.answerCallbackQuery(q.id,{text:"⛔ Siz bloklangansiz."});return;}
      if(action==="subscribe"&&value==="check"){ const missing=await required.check(bot,q.from.id,cloneId); await bot.answerCallbackQuery(q.id,{text:missing.length?"Hali kanallarga obuna bo'ling.":"Obuna tasdiqlandi!"}); return; }
      else if(action==="lang"){ await users.setLanguage(q.from.id,value); await bot.answerCallbackQuery(q.id,{text:"Til o'zgartirildi"}); }
      else if(action==="noop"){await bot.answerCallbackQuery(q.id);return;}
      else await bot.answerCallbackQuery(q.id);
    } catch(e){ await bot.answerCallbackQuery(q.id,{text:"Xatolik"}).catch(()=>{}); }
  });
}
module.exports={register};
