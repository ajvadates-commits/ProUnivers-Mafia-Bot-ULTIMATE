(()=>{
  const $=id=>document.getElementById(id);
  const fmt=n=>n>=1e6?(n/1e6).toFixed(1)+"M":n>=1e4?(n/1e3).toFixed(1)+"K":String(n);
  const root=location.pathname.replace(/app\/?$/,"");
  let me=null;
  if(window.Telegram&&window.Telegram.WebApp){
    try{
      me=window.Telegram.WebApp.initDataUnsafe.user||null;
      window.Telegram.WebApp.ready();
      window.Telegram.WebApp.expand();
      if(window.Telegram.WebApp.setHeaderColor)window.Telegram.WebApp.setHeaderColor("#0f172a");
      if(window.Telegram.WebApp.setBackgroundColor)window.Telegram.WebApp.setBackgroundColor("#0f172a");
    }catch(_){me=null;}
  }
  const D={
    name:"Ali Valiyev",handle:"@topmafia_uzbot",photo:null,language:"uz",
    level:12,xp:3480,xpNeeded:4200,coins:12850,stars:124,
    games:132,wins:81,losses:47,winRate:61,
    gamesByRole:{mafia:52,citizen:44,detective:20,doctor:16},
    winsByRole:{mafia:33,citizen:27,detective:12,doctor:9},
    mmr:1680,tier:"Oltin",vip:true,pro:false,clones:3,refs:12,
    lastSeen:"2 soat oldin",xpNext:720
  };
  async function boot(){
    let u=D;
    // Haqiqiy Telegram'da bo‘lsa — serverdan tasdiqlangan profilni olamiz
    if(me&&window.Telegram&&window.Telegram.WebApp.initData){
      try{
        const r=await fetch("/app/api/profile?id="+me.id+"&initData="+encodeURIComponent(window.Telegram.WebApp.initData));
        const j=await r.json(); if(j&&j.ok&&j.user)u=Object.assign({},D,j.user);
      }catch(_){}
    }
    render(u);
    if(me){const n=document.getElementById("mode");if(n){n.textContent="LIVE";n.classList.remove("demo");n.classList.add("live");}}
    if(window.Telegram&&window.Telegram.WebApp&&window.Telegram.WebApp.ready)window.Telegram.WebApp.ready();
  }
  function render(u){
    const set=(id,val)=>$(id).textContent=val;
    const av=$("pfAvatar");
    if(av&&u.photo_url){
      av.classList.add("has-photo");
      av.textContent="";
      const img=document.createElement("img");
      img.src=u.photo_url;img.alt="";img.onerror=()=>{av.classList.remove("has-photo");av.textContent=(u.first_name||u.name||"M").charAt(0).toUpperCase();};
      av.appendChild(img);
    }else{
      av.classList.remove("has-photo");
      set("pfAvatar",(u.first_name||u.name||"M").charAt(0).toUpperCase());
    }
    set("pfName",u.first_name||u.name||"Mafia o‘yinchi");
    set("pfHandle",u.username?("@"+u.username):("#"+u.id));
    set("pfLevel",u.level);set("pfXp",fmt(u.xp));
    set("kCoins",fmt(u.coins));
    set("kStars",fmt(u.stars));
    set("kGames",fmt(u.games));set("kRatio",u.winRate+"%");
    set("wBar",u.winRate+"%");
    set("wBarVal",u.winRate+"%");
    set("gWin",fmt(u.wins));set("gLoss",fmt(u.losses));
    set("gMafia",fmt(u.gamesByRole.mafia));set("gCitizen",fmt(u.gamesByRole.citizen));
    set("gDet",fmt(u.gamesByRole.detective));set("gDoc",fmt(u.gamesByRole.doctor));
    set("rMafia",fmt(u.winsByRole.mafia));set("rCitizen",fmt(u.winsByRole.citizen));
    set("rDet",fmt(u.winsByRole.detective));set("rDoc",fmt(u.winsByRole.doctor));
    set("qLevel",u.level+"-daraja");
    set("qTier",u.tier||"Bronza");
    set("qMmr",u.mmr);
    set("qVip",$(u.vip)?"VIP":"—");
    set("qCoin",fmt(u.coins));
    set("qStars",fmt(u.stars));
    set("qClones",u.clones);
    set("qRefs",u.refs);
    set("qlLevel",fmt(u.xp)+" / "+fmt(u.xpNeeded));
    const xpbar=document.getElementById("xpbar");if(xpbar){const p=Math.min(100,Math.round((u.xp/u.xpNeeded)*100));xpbar.style.width=p+"%";}
    document.body.classList.add("loaded");
  }
  boot();
})();