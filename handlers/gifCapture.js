const fs=require('fs'),path=require('path');
const cfgPath=path.join(__dirname,'..','gif_ids.json');
function load(){try{return JSON.parse(fs.readFileSync(cfgPath,'utf8'));}catch(_){return {};}}
function save(cfg){fs.writeFileSync(cfgPath,JSON.stringify(cfg,null,2));}
function register({bot,ownerId}){
  bot.on('document',async msg=>{
    if(msg.from.id!==ownerId)return;
    const f=msg.document||{};
    const isGif=f.mime_type&&(f.mime_type==='image/gif'||f.mime_type.startsWith('video/'));
    if(!isGif||!f.file_id)return;
    const cfg=load();
    cfg[f.file_name||'unknown']=f.file_id;
    cfg._last=f.file_id;
    save(cfg);
    await bot.sendMessage(msg.chat.id,"✅ GIF saqlandi!\nfile_id: `"+f.file_id+"`\nNomi: "+(f.file_name||'nomalum'),{parse_mode:"Markdown"});
  });
  bot.onText(/^\/giflist$/,async msg=>{
    if(msg.from.id!==ownerId)return;
    const cfg=load();
    const lines=Object.entries(cfg).filter(([k])=>!k.startsWith('_')).map(([k,v])=>k+": "+v);
    await bot.sendMessage(msg.chat.id,"📁 GIF IDs:\n\n"+(lines.length?lines.join("\n"):"Hali yo'q"));
  });
}
module.exports={register};
