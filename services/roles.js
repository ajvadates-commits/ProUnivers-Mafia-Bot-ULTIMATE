const SIDES={
  TINCH:{name:"TINCH AHOLI🏙",color:0x2E7D32},
  MAFIA:{name:"MAFIYA🕴",color:0xB71C1C},
  NEYTRAL:{name:"MUSTAQIL🎭",color:0x37474F}
};
const ROLES=[
  {id:"tinch_aholi",e:"👨🏼",name:"Tinch aholi",side:"TINCH",short:"Oddiy fuqaro.",desc:"Maqsadi — mafiya va yakka rollarni aniqlab, kunduzgi ovoz berishda qatnashish."},
  {id:"mashuqa",e:"💃",name:"Mashuqa",side:"MAFIA",short:"Donning xotini.",desc:"Tunda istalgan bitta o‘yinchini tanlaydi. U bilan tunni o‘tkazadi va tanlangan o‘yinchi harakat qila olmaydi."},
  {id:"shifokor",e:"🩺",name:"Shifokor",side:"TINCH",short:"Donning xotini emas!",desc:"Tunda bitta o‘yinchini o‘limdan qutqaradi. O‘zini faqat 1 marta davolay oladi."},
  {id:"daydi",e:"🧙🏻‍♂️",name:"Daydi",side:"TINCH",short:"Tunda bir o‘yinchining uyida tunaydi.",desc:"Tunda bir o‘yinchining uyida tunaydi va u yerga kelgan barcha rollarni ko‘radi. Qotillikka guvoh bo‘lishi mumkin."},
  {id:"komissar",e:"🥸",name:"Komissar",side:"TINCH",short:"Tunda bitta o‘yinchini tekshiradi.",desc:"Tunda bitta o‘yinchini tekshiradi. 1-tunda tekshiruv qila olmaydi."},
  {id:"tentak",e:"👨🏻‍🦲",name:"Tentak",side:"TINCH",short:"Tinch aholini tanlasa — himoya qiladi.",desc:"Tinch aholini tanlasa — o‘sishdan (o‘limdan) himoya qiladi. Mafia yoki yakka rollarni tanlasa — kallab qo‘yib o‘ldiradi."},
  {id:"muxlis",e:"🔮",name:"Muxlis",side:"NEYTRAL",short:"Tunda o‘z qahramonini tanlaydi.",desc:"Tunda o‘z qahramonini (himoya obyektini) tanlaydi. Agar qahramoni o‘lsa — Muxlis Manyakka aylanadi va barcha dushmanlarini o‘ldiradi."},
  {id:"don",e:"🤵🏽",name:"Don",side:"MAFIA",short:"Mafiya boshlig‘i.",desc:"Mafiya boshlig‘i. Qotillikda oxirgi qarorni beradi. O‘lsa — mafiyalardan biri Don bo‘ladi."},
  {id:"mafiya",e:"🤵🏻",name:"Mafiya",side:"MAFIA",short:"Donning buyruqlarini bajaradi.",desc:"Donning buyruqlarini bajaradi. Don o‘lsa — mafiyalardan biri Don bo‘ladi."},
  {id:"advokat",e:"👨‍💼",name:"Advokat",side:"MAFIA",short:"Mafiyani yashiradi.",desc:"Komissar tekshirsa — Tinch aholi bo‘lib ko‘rinadi. Mafiyani yashiradi."},
  {id:"donning_xotini",e:"💃",name:"Donning xotini",side:"MAFIA",short:"Tunda bitta o‘yinchining rolini biladi.",desc:"Tunda bitta o‘yinchining rolini bilib oladi va mafiya bilan bo‘lishadi."},
  {id:"kimyogar",e:"👨🏻‍🔬",name:"Kimyogar",side:"NEYTRAL",short:"Tunda eliksir beradi.",desc:"Tunda eliksir beradi: — Mafiya bo‘lsa → davolaydi; — Boshqa bo‘lsa → o‘ldiradi."},
  {id:"sotuvchi",e:"🎁",name:"Sotuvchi",side:"NEYTRAL",short:"Betaraf rol.",desc:"Tinch aholi tarafdorlariga rol, hujjat yoki himoya sotishi mumkin. Oxirigacha tirik qolsa — g‘olib bo‘ladi."},
  {id:"suidsid",e:"🧌",name:"Suidsid",side:"NEYTRAL",short:"Oddiy fuqaro ko‘rinishida.",desc:"Oddiy fuqaro ko‘rinishida. Agar adashib osilsa — barcha yutqazadi, faqat u yutadi."},
  {id:"manyak",e:"🔪",name:"Manyak",side:"NEYTRAL",short:"Hammasi o‘lsin — faqat u tirik qolsin.",desc:"Tunda istalgan bitta o‘yinchini o‘ldiradi. Hammasi o‘lsin — faqat u tirik qolsin."},
  {id:"minor",e:"☠️",name:"Minor",side:"NEYTRAL",short:"Tunda bitta uyni minailaydi.",desc:"Tunda bitta uyni minailaydi. U uyga kelgan barcha rollar portlab o‘ladi."},
  {id:"mergan",e:"🎤",name:"Mergan (Snayper)",side:"TINCH",short:"Tunda otadi.",desc:"Tunda otadi. — Donni ko‘ra olmaydi; — Himoya uni to‘xtata olmaydi."},
  {id:"buqalamun",e:"🦎",name:"Buqalamun",side:"NEYTRAL",short:"Tunda bitta o‘yinchini tanlaydi.",desc:"Tunda bitta o‘yinchini tanlab, uning tomoniga o‘tadi: — Mafiya → Mafiya; — Tinch aholi → Serjant; — Yakka → Manyak."},
  {id:"majnun",e:"🕺",name:"Majnun",side:"NEYTRAL",short:"Tunda bitta o‘yinchini tanlaydi.",desc:"Tunda bitta o‘yinchini tanlaydi. Tanlangan o‘yinchining harakatlari buzilib, mast kabi bo‘ladi. Tanlangan odam Don bo‘lsa — Don doktorini o‘ldiradi."}
];
function sideInfo(side){return SIDES[side]||SIDES.NEYTRAL;}
function byId(id){return ROLES.find(r=>r.id===id)||null;}
function list(){return ROLES;}
module.exports={ROLES,SIDES,sideInfo,byId,list};
