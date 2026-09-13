function validateAction(game,actor,target,action){
  const a=game.player(actor), t=game.player(target);
  if(!a||!a.alive||!t||!t.alive) return {ok:false,error:"Invalid player"};
  if(action==="kill"&&!["mafia","don"].includes(a.role))return{ok:false,error:"Not mafia"};
  if(action==="heal"&&a.role!=="doctor")return{ok:false,error:"Not doctor"};
  if(action==="inspect"&&a.role!=="detective")return{ok:false,error:"Not detective"};
  if(actor===target&&action!=="heal")return{ok:false,error:"Invalid target"};
  return{ok:true};
}
function resolve(game){
  const kill=game.actions.get([...game.actions.keys()].find(k=>k.endsWith(":kill")));
  const heal=game.actions.get([...game.actions.keys()].find(k=>k.endsWith(":heal")));
  if(kill&&kill!==heal)game.kill(kill);
  game.nextPhase();
}
function actionText(role,target){
  const name=target.first_name||target.username||target.id;
  const texts={
    mafia:`🤵🏻  Don navbatdagi o'ljasini tanladi...`,
    don:`🤵🏻  Don navbatdagi o'ljasini tanladi...`,
    doctor:`👨🏼‍⚕️  Doktor tungi navbatchilikga ketdi...`,
    detective:`🕵🏼  Komissar katani pistoletini o'qladi...`,
    journalist:`👩🏼‍💻  Jurnalist intervyu olish uchun ketti...`,
    lawyer:`👨🏼‍💼  Advokat Mafiani himoya qilish uchun qidiryapti...`,
    wanderer:`💃  Kezuvchining qandaydir mehmoni bor ekan...`,
    wolf:`🐺  Bo'ri o'z ovini qidirmoqda...`,
    zealot:`🧟  G'azabkor navbatdagi o'ljasini tanladi...`,
    sorcerer:`🧙‍  Sehrgar sehrini o'qimoqda...`,
    tramp:`🧙🏼  Daydi kimnikigadir ichkilik butilka olish uchun ketdi...`,
    seriff:`👮🏼  Serjant postga ketti...`,
    bomber:`💣  Afsungar o'zAfslarini tayyorlamoqda...`
  };
  return texts[role]||`🎭  ${name} nima qilyapti...`;
}
module.exports={validateAction,resolve,actionText};
