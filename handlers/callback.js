const users=require("../database/users");
const games=require("../database/games");
const game=require("./game");
const {languages}=require("../keyboards/language");
const required=require("../services/requiredChannels");
const moderation=require("../database/moderation");
function register({bot,cloneId=0}) {
  bot.on("callback_query", async q=>{
    const [action,value]=q.data.split(":");
    try {
      if(await moderation.isBanned(q.from.id,cloneId)){await bot.answerCallbackQuery(q.id,{text:"⛔ Siz bloklangansiz."});return;}
      if(action==="subscribe"&&value==="check"){ const missing=await required.check(bot,q.from.id,cloneId); await bot.answerCallbackQuery(q.id,{text:missing.length?"Hali barcha kanallarga qo‘shilmagansiz.":"Obuna tasdiqlandi!"}); if(!missing.length) await bot.sendMessage(q.message.chat.id,"✅ Obuna tasdiqlandi."); return; }
      if(action==="game"&&value==="join"){ const missing=await required.check(bot,q.from.id,cloneId); if(missing.length){await bot.answerCallbackQuery(q.id,{text:"Avval majburiy kanallarga qo‘shiling."}); await bot.sendMessage(q.message.chat.id,"📢 O‘yinga kirishdan oldin quyidagi kanallarga obuna bo‘ling:",{reply_markup:required.keyboard(missing)}); return;} await users.upsert(q.from); const p=await game.join(q.message.chat.id,q.from.id); if(!p)return bot.answerCallbackQuery(q.id,{text:"No active game"}); require("../services/cloneActivity").track(cloneId,"game_join",q.message,{userId:q.from.id}); await bot.answerCallbackQuery(q.id,{text:"Joined!"}); await bot.editMessageReplyMarkup({inline_keyboard:[[{text:`👥 Players: ${p.length}`,callback_data:"noop"},{text:"▶️ Start",callback_data:"game:start"}]]},{chat_id:q.message.chat.id,message_id:q.message.message_id}); }
      else if(action==="lang"){ await users.setLanguage(q.from.id,value); await bot.answerCallbackQuery(q.id,{text:"Language updated"}); await bot.sendMessage(q.message.chat.id,"✅ Language updated."); }
      else if(action==="game"&&value==="start"){ const g=await game.getActive(q.message.chat.id); if(g){await games.update(g.id,{state:"running",phase:"night"}); await bot.answerCallbackQuery(q.id,{text:"Game started"}); await bot.sendMessage(q.message.chat.id,"🌙 Night phase started.");} }
      else await bot.answerCallbackQuery(q.id);
    } catch(e){ await bot.answerCallbackQuery(q.id,{text:"Error"}).catch(()=>{}); }
  });
}
module.exports={register};