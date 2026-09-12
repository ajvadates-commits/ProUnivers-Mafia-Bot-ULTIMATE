(()=>{
const $=id=>document.getElementById(id);
const fmt=n=>n>=1e6?(n/1e6).toFixed(1)+"M":n>=1e4?(n/1e3).toFixed(1)+"K":String(n);
let me=null,D={},activeTab="profile";
if(window.Telegram&&window.Telegram.WebApp){
  try{me=Telegram.WebApp.initDataUnsafe.user||null;Telegram.WebApp.ready();Telegram.WebApp.expand();
  if(Telegram.WebApp.setHeaderColor)Telegram.WebApp.setHeaderColor("#0a0e1a");
  if(Telegram.WebApp.setBackgroundColor)Telegram.WebApp.setBackgroundColor("#0a0e1a");
  }catch(_){}
}
const API="/app/api";
const tabs=document.querySelectorAll(".tab");
tabs.forEach(t=>t.addEventListener("click",()=>{activeTab=t.dataset.t;tabs.forEach(x=>x.classList.remove("active"));t.classList.add("active");renderTab();}));
function renderProfile(u){
  const av=$("av");
  if(u.photo_url){av.innerHTML="<img src='"+u.photo_url+"' onerror='this.parentNode.textContent=\""+(u.first_name||"M").charAt(0).toUpperCase()+"\"'>";}else{av.textContent=(u.first_name||"M").charAt(0).toUpperCase();}
  $("nm").textContent=u.first_name||"O'yinchi";
  $("un").textContent=u.username?"@"+u.username:"#"+u.id;
  $("lv").textContent="🏆 Daraja "+(u.level||1);
  const pct=Math.min(100,Math.round(((u.xp||0)/((u.level||1)*100))*100));
  $("xp").style.width=pct+"%";
  $("k1").textContent=fmt(u.coins||0);
  $("k2").textContent=fmt(u.games||0);
  $("k3").textContent=fmt(u.wins||0);
  if(me){const n=$("mode");n.textContent="LIVE";n.className="badge live";}
  return "<div class='card'><div class='stat-row'><span class='k'>💰 Coin</span><span class='v'>"+fmt(u.coins||0)+"</span></div><div class='stat-row'><span class='k'>💎 Olmos</span><span class='v'>"+fmt(u.diamonds||0)+"</span></div><div class='stat-row'><span class='k'>📊 G'alaba nisbati</span><span class='v'>"+(u.winRate||0)+"%</span></div><div class='stat-row'><span class='k'>❌ Yo'qotish</span><span class='v'>"+fmt(u.losses||0)+"</span></div><div class='stat-row'><span class='k'>⭐ XP</span><span class='v'>"+fmt(u.xp||0)+" / "+fmt((u.level||1)*100)+"</span></div><div class='stat-row'><span class='k'>🏆 Daraja</span><span class='v'>"+(u.level||1)+"</span></div></div>";
}
function renderGroups(groups){
  if(!groups||!groups.length) return "<div class='empty'>🏷 Hali guruhlarda o'ynalmagan<br><small>Birinchi o'yinni boshlang!</small></div>";
  return groups.map(g=>"<div class='card'><div class='row'><div class='ava'>🏷</div><div class='nm'>"+g.title+"<small>"+fmt(g.user_games)+" ta o'yin</small></div><div class='pts'>"+fmt(g.total_games)+"</div></div></div>").join("");
}
function renderTop(list){
  if(!list||!list.length) return "<div class='empty'>🏆 Reyting hali shakllanmagan</div>";
  return list.map((u,i)=>{
    const rc=i===0?"g":i===1?"s":i===2?"b":"";
    const medal=i===0?"🥇":i===1?"🥈":i===2?"🥉":(i+1);
    const ph=u.photo_url?"<img src='"+u.photo_url+"'>":(u.first_name||"M").charAt(0).toUpperCase();
    return "<div class='card'><div class='row'><div class='rank "+rc+"'>"+medal+"</div><div class='ava'>"+ph+"</div><div class='nm'>"+(u.first_name||"O'yinchi")+"<small>"+fmt(u.wins||0)+" g'alaba · Lv."+fmt(u.level||1)+"</small></div><div class='pts'>"+fmt(u.wins||0)+"</div></div></div>";
  }).join("");
}
function renderTab(){
  const ct=$("ct");
  if(activeTab==="profile"){ct.innerHTML=D._profile||"<div class='empty'>Yuklanmoqda...</div>";}
  else if(activeTab==="groups"){ct.innerHTML=D._groups||"<div class='empty'>Yuklanmoqda...</div>";}
  else if(activeTab==="top"){ct.innerHTML=D._top||"<div class='empty'>Yuklanmoqda...</div>";}
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
  renderTab();
}
boot();
})();
