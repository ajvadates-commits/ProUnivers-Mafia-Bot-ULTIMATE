const db=require("../database");
const config=require("../config");
const REQUIRED=[
  ["can_manage_chat","⚙️ Chat boshqaruvi"],
  ["can_delete_messages","🗑 Xabar o'chirish"],
  ["can_manage_video_chats","🎥 Video chat boshqarish"],
  ["can_restrict_members","🔨 Banlash"],
  ["can_promote_members","🛡 Admin qo'shish"],
  ["can_change_info","✏️ Guruh ma'lumotini o'zgartirish"],
  ["can_invite_users","👥 User taklif qilish"],
  ["can_pin_messages","📌 Xabar pin qilish"]
];
async function check(bot,chatId){
  const me=await bot.getMe();
  const member=await bot.getChatMember(chatId,me.id);
  if(!["administrator","creator"].includes(member.status)) return {ok:false,status:member.status,missing:REQUIRED.map(x=>x[1]),member};
  const missing=REQUIRED.filter(([key])=>member[key]!==true).map(([,label])=>label);
  return {ok:!config.security.requireBotAdminRights || missing.length===0,missing,member};
}
function text(r){if(r.ok)return "✅ Bot guruhda kerakli admin huquqlariga ega.";return "⛔ BOTGA MAJBURIY ADMIN HUQUQLARI KERAK\n\n"+r.missing.map(x=>"• "+x).join("\n")+"\n\nBotni guruhga administrator qilib, yuqoridagi huquqlarni bering.";}
async function audit(chatId,botId,result){await db.prepare("INSERT INTO bot_rights_audit(chat_id,bot_id,ok,missing) VALUES(?,?,?,?)").run(String(chatId),botId||null,result.ok?1:0,JSON.stringify(result.missing||[]));}
module.exports={check,text,audit,REQUIRED};
