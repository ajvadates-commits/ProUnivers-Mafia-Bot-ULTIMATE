(()=>{
const $=id=>document.getElementById(id);
const fmt=n=>n>=1e6?(n/1e6).toFixed(1)+"M":n>=1e4?(n/1e3).toFixed(1)+"K":String(n);
const esc=s=>{const d=document.createElement("div");d.textContent=s;return d.innerHTML;};
let me=null,D={},activeTab="profile";
if(window.Telegram&&window.Telegram.WebApp){
  try{me=Telegram.WebApp.initDataUnsafe.user||null;Telegram.WebApp.ready();Telegram.WebApp.expand();
  if(Telegram.WebApp.setHeaderColor)Telegram.WebApp.setHeaderColor("#080b16");
  if(Telegram.WebApp.setBackgroundColor)Telegram.WebApp.setBackgroundColor("#080b16");
  }catch(_){}
}
const API="/app/api";
function countAnim(el,target,duration=800){
  const start=performance.now();
  const from=0;
  function tick(now){
    const p=Math.min((now-start)/duration,1);
    const ease=1-Math.pow(1-p,3);
    el.textContent=fmt(Math.round(from+(target-from)*ease));
    if(p<1)requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
function staggerCards(container){
  const cards=container.querySelectorAll(".card");
  cards.forEach((c,i)=>{
    c.style.opacity="0";
    c.style.transform="translateY(16px) scale(.96)";
    setTimeout(()=>{
      c.style.transition="all .4s cubic-bezier(.4,0,.2,1)";
      c.style.opacity="1";
      c.style.transform="translateY(0) scale(1)";
    },60*i);
  });
}
function addRipple(el,e){
  const r=document.createElement("span");
  r.style.cssText="position:absolute;border-radius:50%;background:rgba(99,102,241,.3);width:20px;height:20px;pointer-events:none;animation:ripple .6s ease-out forwards";
  const rect=el.getBoundingClientRect();
  r.style.left=(e.clientX-rect.left-10)+"px";
  r.style.top=(e.clientY-rect.top-10)+"px";
  el.appendChild(r);
  setTimeout(()=>r.remove(),600);
}
document.querySelectorAll(".tab").forEach(t=>t.addEventListener("click",function(e){
  activeTab=this.dataset.t;
  document.querySelectorAll(".tab").forEach(x=>x.classList.remove("active"));
  this.classList.add("active");
  addRipple(this,e);
  renderTab();
}));
document.querySelectorAll(".kpi").forEach(k=>k.addEventListener("click",function(e){addRipple(this,e);}));
document.querySelectorAll(".row").forEach(r=>r.addEventListener("mousemove",function(e){
  const rect=this.getBoundingClientRect();
  this.style.setProperty("--x",((e.clientX-rect.left)/rect.width*100)+"%");
  this.style.setProperty("--y",((e.clientY-rect.top)/rect.height*100)+"%");
}));
function renderProfile(u){
  const av=$("av");
  if(u.photo_url){av.innerHTML="<img src='"+esc(u.photo_url)+"' onerror='this.parentNode.textContent=\""+esc((u.first_name||"M").charAt(0).toUpperCase())+"\"'>";}else{av.textContent=(u.first_name||"M").charAt(0).toUpperCase();}
  $("nm").textContent=u.first_name||"O'yinchi";
  $("un").textContent=u.username?"@"+u.username:"#"+u.id;
  $("lv").textContent="Daraja "+(u.level||1);
  const pct=Math.min(100,Math.round(((u.xp||0)/((u.level||1)*100))*100));
  $("xp").style.width=pct+"%";
  setTimeout(()=>{countAnim($("k1"),u.coins||0);countAnim($("k2"),u.games||0);countAnim($("k3"),u.wins||0);},200);
  if(me){const n=$("mode");n.textContent="LIVE";n.className="badge live";}
  return "<div class='anim-tab'><div class='card card-enter'><div class='inner'>"+
    "<div class='stat-row'><span class='k'>Coin</span><span class='v'>"+fmt(u.coins||0)+"</span></div>"+
    "<div class='stat-row'><span class='k'>Olmos</span><span class='v'>"+fmt(u.diamonds||0)+"</span></div>"+
    "<div class='stat-row'><span class='k'>G'alaba nisbati</span><span class='v'>"+(u.winRate||0)+"%</span></div>"+
    "<div class='stat-row'><span class='k'>Yo'qotish</span><span class='v'>"+fmt(u.losses||0)+"</span></div>"+
    "<div class='stat-row'><span class='k'>XP</span><span class='v'>"+fmt(u.xp||0)+" / "+fmt((u.level||1)*100)+"</span></div>"+
    "<div class='stat-row'><span class='k'>Daraja</span><span class='v'>"+(u.level||1)+"</span></div>"+
    "</div></div></div>";
}
function renderGroups(groups){
  if(!groups||!groups.length) return "<div class='anim-tab'><div class='empty'><div class='ico ico-glow'>&#9670;</div>Hali guruhlarda o'ynalmagan<br>Birinchi o'yinni boshlang</div></div>";
  const html="<div class='anim-tab'>"+groups.map((g,i)=>
    "<div class='card card-enter' style='animation-delay:"+(i*60)+"ms'><div class='row'>"+
    "<div class='rAVA'>"+esc(g.title.charAt(0).toUpperCase())+"</div>"+
    "<div class='nm'>"+esc(g.title)+"<small>"+fmt(g.user_games)+" ta o'yin</small></div>"+
    "<div class='pts'>"+fmt(g.total_games)+"</div>"+
    "</div></div>"
  ).join("")+"</div>";
  setTimeout(()=>staggerCards(document.getElementById("ct")),50);
  return html;
}
function renderTop(list){
  if(!list||!list.length) return "<div class='anim-tab'><div class='empty'><div class='ico ico-glow'>&#9733;</div>Reyting hali shakllanmagan</div></div>";
  const html="<div class='anim-tab'>"+list.map((u,i)=>{
    const rc=i===0?"g":i===1?"s":i===2?"b":"";
    const medal=i===0?"&#9733;":i===1?"&#9734;":i===2?"&#9830;":(i+1);
    const ph=u.photo_url?"<img src='"+esc(u.photo_url)+"'>":esc((u.first_name||"M").charAt(0).toUpperCase());
    return "<div class='card card-enter' style='animation-delay:"+(i*50)+"ms'><div class='row'>"+
      "<div class='rank "+rc+"'>"+medal+"</div>"+
      "<div class='rAVA"+(i<3?" gold":"")+"'>"+ph+"</div>"+
      "<div class='nm'>"+esc(u.first_name||"O'yinchi")+"<small>"+fmt(u.wins||0)+" g'alaba · Lv."+fmt(u.level||1)+"</small></div>"+
      "<div class='pts"+(i===0?" gold":"")+"'>"+fmt(u.wins||0)+"</div>"+
      "</div></div>";
  }).join("")+"</div>";
  setTimeout(()=>staggerCards(document.getElementById("ct")),50);
  return html;
}
function renderActivity(list){
  if(!list||!list.length) return "<div class='anim-tab'><div class='empty'><div class='ico ico-glow'>&#9679;</div>Botda hali harakat yo'q<br>Botni sinab ko'ring!</div></div>";
  const html="<div class='anim-tab'>"+list.map((a,i)=>{
    const parts=a.action.split(":");
    const type=parts[0];
    const val=parts.slice(1).join(":");
    let icon="&#9679;";
    let color="var(--dim)";
    if(type==="command"){icon="&#9881;";color="var(--accent)";}
    else if(type==="button"){icon="&#9654;";color="var(--green)";}
    else if(type==="text"){icon="&#9998;";color="var(--blue)";}
    const label=type==="command"?val:type==="button"?val:a.detail||"xabar";
    const time=a.created_at?new Date(a.created_at).toLocaleTimeString("uz",{hour:"2-digit",minute:"2-digit"}):"";
    return "<div class='card card-enter' style='animation-delay:"+(i*50)+"ms'><div class='row'>"+
      "<div class='rAVA' style='color:"+color+";border-color:"+color+"30'>"+icon+"</div>"+
      "<div class='nm'>"+esc(label)+"<small>"+time+"</small></div>"+
      "</div></div>";
  }).join("")+"</div>";
  setTimeout(()=>staggerCards(document.getElementById("ct")),50);
  return html;
}
function renderTab(){
  const ct=$("ct");
  if(activeTab==="profile")ct.innerHTML=D._profile||"<div class='anim-tab shimmer' style='height:200px;border-radius:14px'></div>";
  else if(activeTab==="groups")ct.innerHTML=D._groups||"<div class='anim-tab shimmer' style='height:100px;border-radius:14px'></div>";
  else if(activeTab==="top")ct.innerHTML=D._top||"<div class='anim-tab shimmer' style='height:100px;border-radius:14px'></div>";
  else if(activeTab==="activity")ct.innerHTML=D._activity||"<div class='anim-tab shimmer' style='height:100px;border-radius:14px'></div>";
}
async function boot(){
  const uid=me?me.id:0;
  const idp=me&&Telegram.WebApp.initData?Telegram.WebApp.initData:"";
  const base={first_name:"Demo o'yinchi",username:"topmafia_uzbot",photo_url:null,level:1,xp:0,coins:0,games:0,wins:0,losses:0,winRate:0,diamonds:0};
  let u=base;
  try{const r=await fetch(API+"/profile?id="+uid+"&initData="+encodeURIComponent(idp));const j=await r.json();if(j.ok&&j.user)u=Object.assign({},base,j.user);}catch(_){}
  D._profile=renderProfile(u);
  try{const r=await fetch(API+"/groups?user_id="+uid+"&initData="+encodeURIComponent(idp));const j=await r.json();D._groups=renderGroups(j.groups||[]);}catch(_){D._groups=renderGroups([]);}
  try{const r=await fetch(API+"/leaderboard");const j=await r.json();D._top=renderTop(j.top||[]);}catch(_){D._top=renderTop([]);}
  try{const r=await fetch(API+"/activity?user_id="+uid+"&initData="+encodeURIComponent(idp));const j=await r.json();D._activity=renderActivity(j.activity||[]);}catch(_){D._activity=renderActivity([]);}
  renderTab();
}
boot();
})();
