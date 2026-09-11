const guide = {
  "game:join":"🎮 Qo‘shilish — joriy Mafia lobbyga kiradi. Agar majburiy kanal bo‘lsa, avval obuna tekshiriladi.",
  "game:start":"▶️ Start — lobby yetarli o‘yinchi bo‘lsa o‘yinni boshlaydi.",
  "lang:uz":"🇺🇿 O‘zbek — interfeys tilini o‘zbekchaga o‘zgartiradi.",
  "lang:ru":"🇷🇺 Русский — interfeys tilini rus tiliga o‘zgartiradi.",
  "lang:en":"🇬🇧 English — interfeys tilini inglizchaga o‘zgartiradi.",
  "rank:global":"🏆 Ranking — global reytingni ko‘rsatadi.",
  "economy":"💰 Economy — balans va iqtisod bo‘limini ochadi.",
  "owner:panel":"👑 Owner panel — asosiy Owner menyusiga qaytaradi.",
  "owner:stats":"📊 Statistics — user, game va win statistikalarini ko‘rsatadi.",
  "owner:users":"👥 Users — foydalanuvchilar statistikasi va boshqaruv bo‘limi.",
  "owner:games":"🎮 Games — o‘yinlar holati va statistikasi.",
  "owner:economy":"💰 Economy — coin iqtisodini boshqarish.",
  "owner:wallet":"⭐ Stars Wallet — muvaffaqiyatli Stars to‘lovlaridan yozilgan ichki ledger balansini ko‘rsatadi.",
  "owner:products":"💎 VIP / PRO — VIP, PRO va Premium Sticker mahsulotlari narxlarini ko‘rsatadi.",
  "owner:channels":"📢 Required Channels — majburiy kanallarni ko‘rish va boshqarish.",
  "owner:admins":"🛡 Admins — Owner/Admin ID ro‘yxatini ko‘rsatadi.",
  "owner:settings":"⚙️ Settings — bot konfiguratsiyasini ko‘rsatadi.",
  "subscribe:check":"✅ Tekshirish — majburiy kanallarga obunani qayta tekshiradi.",
  "buy:vip":"💙 Buy VIP — Telegram Stars invoice yaratadi.",
  "buy:pro":"💜 Buy PRO — Telegram Stars invoice yaratadi.",
  "buy:premium_sticker":"🎁 Premium Sticker — Telegram Stars invoice yaratadi."
};
function get(action){return guide[action]||"Bu tugma uchun qo‘llanma hali kiritilmagan.";}
function all(){return {...guide};}
module.exports={get,all};
