const users=require("../database/users");
const games=require("../database/games");
const game=require("./game");
const {languages}=require("../keyboards/language");
const required=require("../services/requiredChannels");
const moderation=require("../database/moderation");
const fs=require("fs"),path=require("path");
function loadGifs(){try{return JSON.parse(fs.readFileSync(path.join(__dirname,"..","gif_ids.json"),"utf8"));}catch(_){return {}};}
function register({bot,cloneId=0}) {
  bot.on("callback_query", async q=>{
    const [action,value]=q.data.split(":");
    try {
      if(await moderation.isBanned(q.from.id,cloneId)){await bot.answerCallbackQuery(q.id,{text:"⛔ Siz bloklangansiz."});return;}
      if(action==="subscribe"&&value==="check"){ const missing=await required.check(bot,q.from.id,cloneId); await bot.answerCallbackQuery(q.id,{text:missing.length?"Hali barcha kanallarga qo'shilmagansiz.":"Obuna tasdiqlandi!"}); if(!missing.length) await bot.sendMessage(q.message.chat.id,"✅ Obuna tasdiqlandi."); return; }
      if(action==="game"&&value==="join"){
        const missing=await required.check(bot,q.from.id,cloneId);
        if(missing.length){await bot.answerCallbackQuery(q.id,{text:"Avval majburiy kanallarga qo'shiling."}); await bot.sendMessage(q.message.chat.id,"📢 O'yinga kirishdan oldin quyidagi kanallarga obuna bo'ling:",{reply_markup:required.keyboard(missing)}); return;}
        await users.upsert(q.from);
        const p=await game.join(q.message.chat.id,q.from.id);
        if(!p)return bot.answerCallbackQuery(q.id,{text:"No active game"});
        require("../services/cloneActivity").track(cloneId,"game_join",q.message,{userId:q.from.id});
        await bot.answerCallbackQuery(q.id,{text:"Joined!"});
        const playerList=p.map((u,i)=>`  ${i+1}. ${u.first_name||u.username||u.id}`).join("\n");
        const txt=`🎭  MAFIA LOBBY\n━━━━━━━━━━━━━━━━━━\n👥  O'yinchilar: ${p.length}\n━━━━━━━━━━━━━━━━━━\n${playerList}\n━━━━━━━━━━━━━━━━━━\n⏳  Boshlash uchun /start yoki "▶️ Start"`;
        try{await bot.editMessageText(txt,{chat_id:q.message.chat.id,message_id:q.message.message_id,reply_markup:{inline_keyboard:[[{text:`👥 ${p.length} o'yinchi`,callback_data:"noop"},{text:"▶️ START",callback_data:"game:start"}]]}});}catch(_){}
        return;
      }
      else if(action==="lang"){ await users.setLanguage(q.from.id,value); await bot.answerCallbackQuery(q.id,{text:"Language updated"}); await bot.sendMessage(q.message.chat.id,"✅ Til o'zgartirildi."); }
      else if(action==="game"&&value==="start"){
        const g=await game.getActive(q.message.chat.id);
        if(!g)return bot.answerCallbackQuery(q.id,{text:"No active game"});
        await games.update(g.id,{state:"running",phase:"night"});
        await bot.answerCallbackQuery(q.id,{text:"Game started"});
        const gifs=loadGifs();
        const players=await games.players(g.id);
        const playerList=players.map((u,i)=>`  ${i+1}. ${u.first_name||u.username||u.id}`).join("\n");
        const nightMsg=`🌙  TUN BOSHLANDI\n━━━━━━━━━━━━━━━━━━\n🏙  Shahar uyquga ketdi...\nKimdir ko'chasga chiqdi...\nKimdir boshqa uyquda qoldi...\n━━━━━━━━━━━━━━━━━━\n👥  O'yinchilar (${players.length}):\n${playerList}\n━━━━━━━━━━━━━━━━━━\n⏳  Rollar tarqatilmoqda...`;
        if(gifs.night){
          try{await bot.sendAnimation(q.message.chat.id,gifs.night,{caption:nightMsg});}catch(_){await bot.sendMessage(q.message.chat.id,nightMsg);}
        }else{
          await bot.sendMessage(q.message.chat.id,nightMsg);
        }
        return;
      }
      else await bot.answerCallbackQuery(q.id);
    } catch(e){ await bot.answerCallbackQuery(q.id,{text:"Error"}).catch(()=>{}); }
  });
}
module.exports={register};
