function aliveText(game){return game.alive().map((p,i)=>`  ${i+1}. ${p.first_name||p.username||p.id}`).join("\n");}
function begin(game){game.phase="day";game.votes.clear();return {round:game.round,players:game.alive()};}
function summary(game){
  const alive=game.alive();
  const dead=game.dead||[];
  const mafia=alive.filter(p=>["mafia","don"].includes(p.role));
  const town=alive.filter(p=>!["mafia","don"].includes(p.role));
  return `☀️  KUN ${game.round}\n━━━━━━━━━━━━━━━━━━\n🌤  Shahar uyg'ondi...\nShamollar tundagi mish-mishlarni butun shaharga yetkazmoqda..\n━━━━━━━━━━━━━━━━━━\n👥  Tirik o'yinchilar (${alive.length}):\n${aliveText(game)}\n━━━━━━━━━━━━━━━━━━\n🗳  Ovoz berish vaqti keldi!\n30 soniya ichida ovoz bering!`;
}
function nightResult(game,killed,healed,detected){
  let msg=`🌙  TUN NATIJALARI\n━━━━━━━━━━━━━━━━━━\n`;
  if(killed&&!healed){
    const name=killed.first_name||killed.username||killed.id;
    msg+=`💀  ${name} vaxshiylarcha o'ldirildi!\nAytishlaricha unikiga 🤵🏻 Don kelgan\n`;
  }else if(healed){
    msg+=`✨  Kimdir himoyasini ishlatdi!\nO'lim oldini olindi!\n`;
  }else{
    msg+=`🌙  Tunda hech kim o'lmadi...\nShahar tinch o'tdi\n`;
  }
  if(detected){
    msg+=`\n🔍  Komissar biror narsa aniqladi!`;
  }
  msg+=`\n━━━━━━━━━━━━━━━━━━\n⏳  Ertalabni kuting...`;
  return msg;
}
module.exports={begin,summary,aliveText,nightResult};
