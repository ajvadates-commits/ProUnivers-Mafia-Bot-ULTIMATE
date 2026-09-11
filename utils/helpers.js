function clamp(n,min,max){return Math.min(max,Math.max(min,n));}
function sleep(ms){return new Promise(r=>setTimeout(r,ms));}
function randomId(prefix="id"){return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2,10)}`;}
function chunk(arr,size){const out=[];for(let i=0;i<arr.length;i+=size)out.push(arr.slice(i,i+size));return out;}
function shuffle(arr){const a=[...arr];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
module.exports={clamp,sleep,randomId,chunk,shuffle};
