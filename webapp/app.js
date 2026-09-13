(()=>{
const $=id=>document.getElementById(id);
const fmt=n=>n>=1e6?(n/1e6).toFixed(1)+"M":n>=1e4?(n/1e3).toFixed(1)+"K":String(n);
const esc=s=>{const d=document.createElement("div");d.textContent=s;return d.innerHTML;};
let me=null,D={},activeTab="profile",particles=[],confettis=[],isOwner=false;
if(window.Telegram&&window.Telegram.WebApp){
  try{me=Telegram.WebApp.initDataUnsafe.user||null;Telegram.WebApp.ready();Telegram.WebApp.expand();
  if(Telegram.WebApp.setHeaderColor)Telegram.WebApp.setHeaderColor("#080b16");
  if(Telegram.WebApp.setBackgroundColor)Telegram.WebApp.setBackgroundColor("#080b16");
  }catch(_){}
}
const API="/app/api";

// ===== COUNT ANIMATION =====
function countAnim(el,target,duration=900){
  const start=performance.now();
  const from=0;
  function tick(now){
    const p=Math.min((now-start)/duration,1);
    const ease=1-Math.pow(1-p,4);
    el.textContent=fmt(Math.round(from+(target-from)*ease));
    if(p<1)requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

// ===== STAGGER CARDS =====
function staggerCards(container){
  const cards=container.querySelectorAll(".card");
  cards.forEach((c,i)=>{
    c.style.opacity="0";
    c.style.transform="translateY(20px) scale(.95)";
    setTimeout(()=>{
      c.style.transition="all .5s cubic-bezier(.4,0,.2,1)";
      c.style.opacity="1";
      c.style.transform="translateY(0) scale(1)";
    },70*i);
  });
}

// ===== RIPPLE =====
function addRipple(el,e){
  const r=document.createElement("span");
  r.style.cssText="position:absolute;border-radius:50%;background:linear-gradient(135deg,rgba(99,102,241,.4),rgba(139,92,246,.2));width:20px;height:20px;pointer-events:none;animation:ripple .7s ease-out forwards;z-index:10";
  const rect=el.getBoundingClientRect();
  r.style.left=(e.clientX-rect.left-10)+"px";
  r.style.top=(e.clientY-rect.top-10)+"px";
  el.appendChild(r);
  setTimeout(()=>r.remove(),700);
}

// ===== CONFETTI BURST =====
function confettiBurst(x,y,count=8){
  const colors=["#818cf8","#a78bfa","#fbbf24","#34d399","#fb7185","#60a5fa"];
  for(let i=0;i<count;i++){
    const c=document.createElement("div");
    const size=Math.random()*6+3;
    const angle=(Math.PI*2/count)*i;
    const dist=Math.random()*60+40;
    c.style.cssText=`position:fixed;width:${size}px;height:${size}px;background:${colors[i%colors.length]};border-radius:${Math.random()>.5?"50%":"2px"};pointer-events:none;z-index:100;left:${x}px;top:${y}px;transition:all .8s cubic-bezier(.4,0,.2,1);opacity:1`;
    document.body.appendChild(c);
    requestAnimationFrame(()=>{
      c.style.transform=`translate(${Math.cos(angle)*dist}px,${Math.sin(angle)*dist}px) rotate(${Math.random()*360}deg)`;
      c.style.opacity="0";
    });
    setTimeout(()=>c.remove(),800);
  }
}

// ===== CURSOR TRAIL =====
let trailThrottle=0;
document.addEventListener("mousemove",e=>{
  if(Date.now()-trailThrottle<50)return;
  trailThrottle=Date.now();
  const t=document.createElement("div");
  t.style.cssText=`position:fixed;width:4px;height:4px;background:var(--accent);border-radius:50%;pointer-events:none;z-index:100;left:${e.clientX}px;top:${e.clientY}px;opacity:.5;transition:all .5s ease`;
  document.body.appendChild(t);
  requestAnimationFrame(()=>{
    t.style.transform="scale(0)";
    t.style.opacity="0";
  });
  setTimeout(()=>t.remove(),500);
});

// ===== TILT EFFECT =====
function addTilt(el){
  el.addEventListener("mousemove",e=>{
    const rect=el.getBoundingClientRect();
    const x=(e.clientX-rect.left)/rect.width-.5;
    const y=(e.clientY-rect.top)/rect.height-.5;
    el.style.transform=`perspective(500px) rotateY(${x*8}deg) rotateX(${-y*8}deg) scale(1.02)`;
  });
  el.addEventListener("mouseleave",()=>{
    el.style.transform="perspective(500px) rotateY(0) rotateX(0) scale(1)";
    el.style.transition="all .4s cubic-bezier(.4,0,.2,1)";
  });
  el.addEventListener("mouseenter",()=>{
    el.style.transition="all .1s ease";
  });
}

// ===== TAB CLICK =====
document.querySelectorAll(".tab").forEach(t=>t.addEventListener("click",function(e){
  activeTab=this.dataset.t;
  document.querySelectorAll(".tab").forEach(x=>x.classList.remove("active"));
  this.classList.add("active");
  addRipple(this,e);
  confettiBurst(e.clientX,e.clientY,5);
  renderTab();
}));

// ===== KPI CLICK =====
document.querySelectorAll(".kpi").forEach((k,i)=>{
  addTilt(k);
  k.addEventListener("click",function(e){
    addRipple(this,e);
    confettiBurst(e.clientX,e.clientY,6);
    this.style.animation="none";
    this.offsetHeight;
    this.style.animation="jelly .5s ease";
  });
});

// ===== ROW HOVER =====
document.addEventListener("mousemove",e=>{
  document.querySelectorAll(".row").forEach(r=>{
    const rect=r.getBoundingClientRect();
    if(e.clientX>=rect.left&&e.clientX<=rect.right&&e.clientY>=rect.top&&e.clientY<=rect.bottom){
      r.style.setProperty("--x",((e.clientX-rect.left)/rect.width*100)+"%");
      r.style.setProperty("--y",((e.clientY-rect.top)/rect.height*100)+"%");
    }
  });
});

// ===== NAV CLICK =====
document.querySelectorAll(".nav a").forEach(a=>{
  a.addEventListener("click",function(e){
    if(this.getAttribute("href")==="#")e.preventDefault();
    document.querySelectorAll(".nav a").forEach(x=>x.classList.remove("active"));
    this.classList.add("active");
    addRipple(this,e);
    this.querySelector(".ic").style.animation="none";
    this.querySelector(".ic").offsetHeight;
    this.querySelector(".ic").animation="bounce .5s ease";
  });
});

// ===== PROFILE RENDER =====
function renderProfile(u){
  const av=$("av");
  if(u.photo_url){av.innerHTML="<img src='"+esc(u.photo_url)+"' onerror='this.parentNode.textContent=\""+esc((u.first_name||"M").charAt(0).toUpperCase())+"\"'>";}else{av.textContent=(u.first_name||"M").charAt(0).toUpperCase();}
  $("nm").textContent=u.first_name||"O'yinchi";
  $("un").textContent=u.username?"@"+u.username:"#"+u.id;
  $("lv").textContent="Daraja "+(u.level||1);
  const pct=Math.min(100,Math.round(((u.xp||0)/((u.level||1)*100))*100));
  $("xp").style.width=pct+"%";
  setTimeout(()=>{countAnim($("k1"),u.coins||0);countAnim($("k2"),u.games||0);countAnim($("k3"),u.wins||0);},300);
  if(me){const n=$("mode");n.textContent="LIVE";n.className="badge live anim-pop";}
  if(u.isOwner){const n=$("mode");n.textContent="OWNER";n.className="badge anim-pop";n.style.background="rgba(251,191,36,.12)";n.style.color="#fbbf24";n.style.border="1px solid rgba(251,191,36,.18)";}
  return "<div class='anim-tab'><div class='card card-enter'><div class='inner'>"+
    (u.isOwner?"<div style='text-align:center;margin-bottom:8px'><span style='font-size:20px'>&#9733;</span><span style='font-size:11px;color:#fbbf24;font-weight:700;margin-left:4px'>VIP OWNER</span></div>":"")+
    "<div class='stat-row'><span class='k'>Coin</span><span class='v'>"+fmt(u.coins||0)+"</span></div>"+
    "<div class='stat-row'><span class='k'>Olmos</span><span class='v'>"+fmt(u.diamonds||0)+"</span></div>"+
    "<div class='stat-row'><span class='k'>G'alaba nisbati</span><span class='v'>"+(u.winRate||0)+"%</span></div>"+
    "<div class='stat-row'><span class='k'>Yo'qotish</span><span class='v'>"+fmt(u.losses||0)+"</span></div>"+
    "<div class='stat-row'><span class='k'>XP</span><span class='v'>"+fmt(u.xp||0)+" / "+fmt((u.level||1)*100)+"</span></div>"+
    "<div class='stat-row'><span class='k'>Daraja</span><span class='v'>"+(u.level||1)+"</span></div>"+
    "</div></div></div>";
}

// ===== GROUPS RENDER =====
function renderGroups(groups){
  if(!groups||!groups.length) return "<div class='anim-tab'><div class='empty'><div class='ico ico-glow anim-float'>&#9670;</div>Hali guruhlarda o'ynalmagan<br>Birinchi o'yinni boshlang</div></div>";
  const html="<div class='anim-tab'>"+groups.map((g,i)=>
    "<div class='card card-enter' style='animation-delay:"+(i*70)+"ms'><div class='row'>"+
    "<div class='rAVA'>"+esc(g.title.charAt(0).toUpperCase())+"</div>"+
    "<div class='nm'>"+esc(g.title)+"<small>"+fmt(g.user_games)+" ta o'yin</small></div>"+
    "<div class='pts'>"+fmt(g.total_games)+"</div>"+
    "</div></div>"
  ).join("")+"</div>";
  setTimeout(()=>{staggerCards(document.getElementById("ct"));document.querySelectorAll(".card").forEach(addTilt);},50);
  return html;
}

// ===== TOP RENDER =====
function renderTop(list){
  if(!list||!list.length) return "<div class='anim-tab'><div class='empty'><div class='ico ico-glow anim-float'>&#9733;</div>Reyting hali shakllanmagan</div></div>";
  const html="<div class='anim-tab'>"+list.map((u,i)=>{
    const rc=i===0?"g":i===1?"s":i===2?"b":"";
    const medal=i===0?"&#9733;":i===1?"&#9734;":i===2?"&#9830;":(i+1);
    const ph=u.photo_url?"<img src='"+esc(u.photo_url)+"'>":esc((u.first_name||"M").charAt(0).toUpperCase());
    return "<div class='card card-enter' style='animation-delay:"+(i*60)+"ms'><div class='row'>"+
      "<div class='rank "+rc+"'>"+medal+"</div>"+
      "<div class='rAVA"+(i<3?" gold":"")+"'>"+ph+"</div>"+
      "<div class='nm'>"+esc(u.first_name||"O'yinchi")+"<small>"+fmt(u.wins||0)+" g'alaba · Lv."+fmt(u.level||1)+"</small></div>"+
      "<div class='pts"+(i===0?" gold":"")+"'>"+fmt(u.wins||0)+"</div>"+
      "</div></div>";
  }).join("")+"</div>";
  setTimeout(()=>{staggerCards(document.getElementById("ct"));document.querySelectorAll(".card").forEach(addTilt);},50);
  return html;
}

// ===== ACTIVITY RENDER =====
function renderActivity(list){
  if(!list||!list.length) return "<div class='anim-tab'><div class='empty'><div class='ico ico-glow anim-float'>&#9679;</div>Botda hali harakat yo'q<br>Botni sinab ko'ring!</div></div>";
  const html="<div class='anim-tab'>"+list.map((a,i)=>{
    const parts=a.action.split(":");
    const type=parts[0];
    const val=parts.slice(1).join(":");
    let icon="&#9679;";
    let color="var(--dim)";
    let anim="";
    if(type==="command"){icon="&#9881;";color="var(--accent)";anim="anim-rotate";}
    else if(type==="button"){icon="&#9654;";color="var(--green)";anim="anim-scale";}
    else if(type==="text"){icon="&#9998;";color="var(--blue)";anim="anim-breathe";}
    const label=type==="command"?val:type==="button"?val:a.detail||"xabar";
    const time=a.created_at?new Date(a.created_at).toLocaleTimeString("uz",{hour:"2-digit",minute:"2-digit"}):"";
    return "<div class='card card-enter' style='animation-delay:"+(i*60)+"ms'><div class='row'>"+
      "<div class='rAVA "+anim+"' style='color:"+color+";border-color:"+color+"30'>"+icon+"</div>"+
      "<div class='nm'>"+esc(label)+"<small>"+time+"</small></div>"+
      "</div></div>";
  }).join("")+"</div>";
  setTimeout(()=>{staggerCards(document.getElementById("ct"));document.querySelectorAll(".card").forEach(addTilt);},50);
  return html;
}

// ===== OWNER RENDER =====
function renderOwner(data){
  if(!data||!data.ok) return "<div class='anim-tab'><div class='empty'><div class='ico ico-glow anim-float'>&#9733;</div>Ma'lumot topilmadi</div></div>";
  const s=data.stats;
  const html="<div class='anim-tab'>"+
    "<div class='card card-enter'><div class='inner'>"+
    "<div style='text-align:center;margin-bottom:12px'><span style='font-size:24px'>&#9733;</span><div style='font-size:14px;font-weight:700;color:var(--gold);margin-top:4px'>OWNER PANEL</div></div>"+
    "<div class='stat-row'><span class='k'>👥 Foydalanuvchilar</span><span class='v'>"+fmt(s.users)+"</span></div>"+
    "<div class='stat-row'><span class='k'>🎮 Jami o'yinlar</span><span class='v'>"+fmt(s.games)+"</span></div>"+
    "<div class='stat-row'><span class='k'>🏆 Jami g'alabalar</span><span class='v'>"+fmt(s.wins)+"</span></div>"+
    "<div class='stat-row'><span class='k'>⭐ Stars</span><span class='v'>"+fmt(s.revenue)+"</span></div>"+
    "<div class='stat-row'><span class='k'>🟢 Faol o'yinlar</span><span class='v'>"+fmt(s.activeGames)+"</span></div>"+
    "<div class='stat-row'><span class='k'>🔨 Banlanganlar</span><span class='v'>"+fmt(s.banned)+"</span></div>"+
    "</div></div>"+
    (data.topUsers&&data.topUsers.length?
    "<div class='card card-enter' style='animation-delay:.1s'><div class='inner'>"+
    "<div style='font-size:12px;font-weight:600;color:var(--dim);margin-bottom:8px'>TOP 10 FOYDALANUVCHILAR</div>"+
    data.topUsers.map((u,i)=>{
      const name=u.username?"@"+u.username:(u.first_name||"O'yinchi");
      return "<div class='stat-row'><span class='k'>"+(i+1)+". "+esc(name)+"</span><span class='v'>"+fmt(u.wins||0)+" W · Lv."+(u.level||1)+"</span></div>";
    }).join("")+
    "</div></div>":"")+
    (data.recentGames&&data.recentGames.length?
    "<div class='card card-enter' style='animation-delay:.2s'><div class='inner'>"+
    "<div style='font-size:12px;font-weight:600;color:var(--dim);margin-bottom:8px'>OXIRGI 10 O'YIN</div>"+
    data.recentGames.map(g=>{
      const state=g.state==="lobby"?"⏳ Lobby":g.state==="running"?"🟢 Faol":"🔴 Tugagan";
      const time=g.created_at?new Date(g.created_at).toLocaleTimeString("uz",{hour:"2-digit",minute:"2-digit"}):"";
      return "<div class='stat-row'><span class='k'>"+state+"</span><span class='v'>"+time+"</span></div>";
    }).join("")+
    "</div></div>":"")+
    "</div>";
  setTimeout(()=>{staggerCards(document.getElementById("ct"));document.querySelectorAll(".card").forEach(addTilt);},50);
  return html;
}

// ===== RENDER TAB =====
function renderTab(){
  const ct=$("ct");
  if(activeTab==="profile")ct.innerHTML=D._profile||"<div class='anim-tab shimmer' style='height:200px;border-radius:14px'></div>";
  else if(activeTab==="groups")ct.innerHTML=D._groups||"<div class='anim-tab shimmer' style='height:100px;border-radius:14px'></div>";
  else if(activeTab==="top")ct.innerHTML=D._top||"<div class='anim-tab shimmer' style='height:100px;border-radius:14px'></div>";
  else if(activeTab==="activity")ct.innerHTML=D._activity||"<div class='anim-tab shimmer' style='height:100px;border-radius:14px'></div>";
  else if(activeTab==="owner")ct.innerHTML=D._owner||"<div class='anim-tab shimmer' style='height:200px;border-radius:14px'></div>";
}

// ===== BOOT =====
async function boot(){
  const uid=me?me.id:0;
  const idp=me&&Telegram.WebApp.initData?Telegram.WebApp.initData:"";
  const base={first_name:"Demo o'yinchi",username:"topmafia_uzbot",photo_url:null,level:1,xp:0,coins:0,games:0,wins:0,losses:0,winRate:0,diamonds:0,isOwner:false};
  let u=base;
  try{const r=await fetch(API+"/profile?id="+uid+"&initData="+encodeURIComponent(idp));const j=await r.json();if(j.ok&&j.user)u=Object.assign({},base,j.user);}catch(_){}
  isOwner=u.isOwner;
  D._profile=renderProfile(u);
  if(isOwner){
    $("ownerTab").style.display="";
    try{const r=await fetch(API+"/owner?user_id="+uid+"&initData="+encodeURIComponent(idp));const j=await r.json();D._owner=renderOwner(j);}catch(_){D._owner=renderOwner({ok:false});}
  }
  try{const r=await fetch(API+"/groups?user_id="+uid+"&initData="+encodeURIComponent(idp));const j=await r.json();D._groups=renderGroups(j.groups||[]);}catch(_){D._groups=renderGroups([]);}
  try{const r=await fetch(API+"/leaderboard");const j=await r.json();D._top=renderTop(j.top||[]);}catch(_){D._top=renderTop([]);}
  try{const r=await fetch(API+"/activity?user_id="+uid+"&initData="+encodeURIComponent(idp));const j=await r.json();D._activity=renderActivity(j.activity||[]);}catch(_){D._activity=renderActivity([]);}
  renderTab();
}
boot();
})();
