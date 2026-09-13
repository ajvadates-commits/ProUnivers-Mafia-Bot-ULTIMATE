const {ROLES,SIDES,byId}=require("./roles");

const POOL={
  TINCH:["tinch_aholi","shifokor","daydi","komissar","tentak","mergan"],
  MAFIA:["don","mafiya","advokat","donning_xotini","mashuqa"],
  NEYTRAL:["muxlis","kimyogar","sotuvchi","suidsid","manyak","minor","buqalamun","majnun"]
};

function shuffle(arr,rnd=Math.random){
  const a=arr.slice();
  for(let i=a.length-1;i>0;i--){
    const j=Math.floor(rnd()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}

function buildPool(count,{minMafia=()=>Math.max(1,Math.floor(count/4)),maxMafia=Math.ceil(count/3)}) {
  const mafiaCount=Math.min(maxMafia,Math.max(minMafia(count),Math.floor(count/4)));
  const neutralCount=Math.max(0,Math.floor(count/5));
  const townCount=count-mafiaCount-neutralCount;
  const pool=[
    ...pickN(POOL.MAFIA,mafiaCount),
    ...pickN(POOL.NEYTRAL,neutralCount),
    ...pickN(POOL.TINCH,townCount)
  ];
  return shuffle(pool);
}

function pickN(list,n){
  const src=shuffle(list);
  const out=[];
  for(let i=0;i<n;i++) out.push(src[i%src.length]);
  return out;
}

function assign(gameId,playerIds,rnd=Math.random){
  const pool=buildPool(playerIds.length);
  const players=shuffle(playerIds.slice(),rnd);
  return players.map((uid,i)=>({gameId,userId:uid,roleId:pool[i%pool.length]}));
}

function sidesCount(roleIds){
  const counts={TINCH:0,MAFIA:0,NEYTRAL:0};
  for(const id of roleIds){
    const r=byId(id); if(r) counts[r.side]++;
  }
  return counts;
}

function winConditions(side){
  return {
    MAFIA:"Maqsad — tinch aholi va yakka rollarni yo'q qilish. Don tirik qolsa g'alaba mustahkamlanadi. Mafiya soni tinch aholiga teng yoki ko'p bo'lsa — mafiya g'alaba qozonadi. Don o'lsa — mafiyalardan biri Don bo'ladi.",
    TINCH:"Maqsad — barcha mafiya a'zolari (Don, mafiya, advokat, Donning xotini, Mashuqa) va yakka rollarni aniqlab, kunduzgi ovoz berishda ularni osish. Tinch aholi himoyachilari: Shifokor (davolaydi), Tentak (uning uyiga kirgach tinch fuqaroni himoya qiladi), Mergan (snayper — himoyani to'xtata olmaydi, Donni ko'ra olmaydi), Daydi (guvoh bo'ladi), Komissar (tekshiradi).",
    NEYTRAL:"Bu rolning o'z mustaqil g'alaba sharti bor (kartochkada ko'rsatilgan). Tinch aholi yoki mafiya — ikkalasidan biriga chiqib ketishi mumkin. Hikoyani yakka o'z g'olibligi bilan yakunlashga intiladi."
  };
}

function card(role){
  if(!role) return null;
  return {
    ...role,
    sideName:SIDES[role.side]?.name||role.side,
    sideColor:SIDES[role.side]?.color||0x37474F,
    win:winConditions(role.side)
  };
}

module.exports={POOL,buildPool,assign,sidesCount,winConditions,card,shuffle,pickN};
