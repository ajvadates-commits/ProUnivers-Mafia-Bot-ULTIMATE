const stats=require("../database/statistics");
function global(limit=10){return stats.top(limit).map((u,i)=>({position:i+1,...u}));}
function format(limit=10){return global(limit).map(x=>`#${x.position} ${x.first_name||x.username||x.id} — ${x.wins} wins — Lv.${x.level}`).join("\n");}
module.exports={global,format};
