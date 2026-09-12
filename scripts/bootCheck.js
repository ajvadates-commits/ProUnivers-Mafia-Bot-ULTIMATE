const fs=require("fs"),p=require("path"),root=process.cwd();
// faqat shu repo fayllari, node_modules/testlar emas
const skip=["node_modules","tests",".git",".data"];
const files=[];
function walk(d){for(const f of fs.readdirSync(d)){const x=p.join(d,f),s=fs.statSync(x);if(s.isDirectory()){if(skip.includes(f))continue;walk(x);}else if(f.endsWith(".js")&&!f.endsWith(".bak"))files.push(x);}}
walk(root);
let ok=0,fail=0;const errors=[];
for(const f of files){
  const rel=p.relative(root,f);
  try{require(f);ok++;}
  catch(e){
    if(e.code==="MODULE_NOT_FOUND"){fail++;errors.push(`${rel} → MODULE_NOT_FOUND: ${e.message.split("\n")[0]}`);}
    else if(/^Cannot find module/i.test(e.message)){fail++;errors.push(`${rel} → cannot find: ${e.message.split("\n")[0]}`);}
    else {fail++;errors.push(`${rel} → ${e.message.split("\n")[0]}`);}
  }
}
console.log(`\n===== YUKLASH TESTI: ${ok} OK / ${fail} XATO =====`);
errors.slice(0,20).forEach(e=>console.log("❌ "+e));
process.exit(fail?1:0);
