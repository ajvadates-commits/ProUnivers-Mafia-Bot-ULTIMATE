const users=require("../database/users");
const games=require("../database/games");
const game=require("./game");
const config=require("../config");
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
        if(!p)return bot.answerCallbackQuery(q.id,{text:"❌ Faol o'yin yo'q"});
        const alreadyIn=p.filter(u=>u.id===q.from.id).length;
        if(!alreadyIn)return bot.answerCallbackQuery(q.id,{text:"❌ O'yin to'lgan yoki tugagan"});
        require("../services/cloneActivity").track(cloneId,"game_join",q.message,{userId:q.from.id});
        const name=q.from.first_name||q.from.username||"O'yinchi";
        await bot.answerCallbackQuery(q.id,{text:`✅ ${name} qo'shildi!`});
        const playerList=p.map((u,i)=>`  ${i+1}. ${u.first_name||u.username||u.id}`).join("\n");
        const txt=`🎭  MAFIA LOBBY\n━━━━━━━━━━━━━━━━━━\n👥  O'yinchilar: ${p.length}/${config.maxPlayers}\n━━━━━━━━━━━━━━━━━━\n${playerList}\n━━━━━━━━━━━━━━━━━━\n📌  "QO'SHILISH" — o'yinga qo'shilish\n📌  "BOSHLASH" — o'yinni boshlash`;
        try{await bot.editMessageText(txt,{chat_id:q.message.chat.id,message_id:q.message.message_id,reply_markup:{inline_keyboard:[[{text:`👥  ${p.length}/${config.maxPlayers}`,callback_data:"noop"}],[{text:"🎯  QO'SHILISH",callback_data:"game:join"},{text:"▶️  BOSHLASH",callback_data:"game:start"}]]}});}catch(_){}
        return;
      }
      else if(action==="lang"){ await users.setLanguage(q.from.id,value); await bot.answerCallbackQuery(q.id,{text:"Til o'zgartirildi"}); await bot.sendMessage(q.message.chat.id,"✅ Til o'zgartirildi."); }
      else if(action==="game"&&value==="start"){
        const g=await game.getActive(q.message.chat.id);
        if(!g)return bot.answerCallbackQuery(q.id,{text:"❌ Faol o'yin yo'q"});
        const players=await games.players(g.id);
        if(players.length<config.minPlayers)return bot.answerCallbackQuery(q.id,{text:`❌ Kamida ${config.minPlayers} ta o'yinchi kerak! Hozir: ${players.length}`});
        await games.update(g.id,{state:"running",phase:"night"});
        await bot.answerCallbackQuery(q.id,{text:"🌙 Tun boshlandi!"});
        const gifs=loadGifs();
        const playerList=players.map((u,i)=>`  ${i+1}. ${u.first_name||u.username||u.id}`).join("\n");
        const nightMsg=`🌙  TUN BOSHLANDI\n━━━━━━━━━━━━━━━━━━\n🏙  Shahar uyquga ketdi...\nKimdir ko'chasga chiqdi...\nKimdir boshqa uyquda qoldi...\n━━━━━━━━━━━━━━━━━━\n👥  O'yinchilar (${players.length}):\n${playerList}\n━━━━━━━━━━━━━━━━━━\n⏳  Rollar tarqatilmoqda...`;
        if(gifs.night){
          try{await bot.sendAnimation(q.message.chat.id,gifs.night,{caption:nightMsg});}catch(_){await bot.sendMessage(q.message.chat.id,nightMsg);}
        }else{
          await bot.sendMessage(q.message.chat.id,nightMsg);
        }
        return;
      }
      else if(action==="noop"){await bot.answerCallbackQuery(q.id);return;}
      else await bot.answerCallbackQuery(q.id);
    } catch(e){ await bot.answerCallbackQuery(q.id,{text:"Xatolik"}).catch(()=>{}); }
  });
}
module.exports={register};
