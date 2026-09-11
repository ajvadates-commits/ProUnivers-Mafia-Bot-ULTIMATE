# Mafia Bot — Clone + Owner/Admin qo‘shimchalari

## 1) Majburiy kanal
Owner panel → **📢 Channels**.

- **➕ Kanal qo‘shish**: `CHAT_ID|TITLE|INVITE_LINK`
- Kanal ro‘yxatidagi tugma orqali **🗑 olib tashlash**.
- O‘yinchi `/mafia` lobbyga kirishda `getChatMember` orqali barcha faol majburiy kanallar tekshiriladi.
- Bot tekshiruvni bajara olmasa ham foydalanuvchini o‘tkazmaydi; bot kanalga kirgan bo‘lishi va kerakli Telegram huquqlariga ega bo‘lishi kerak.

## 2) Owner → Admin qo‘shish
Owner panel → **🛡 Admins** → **➕ Admin qo‘shish**.

Owner Telegram ID yuboradi. Keyin alohida permission oynasi chiqadi:

- VIP berish
- PRO berish
- Banlash
- Unban
- Majburiy kanallar
- Broadcast
- O‘yin boshqaruvi
- Foydalanuvchilar
- Economy
- Clone boshqaruvi
- Stars
- Rollar
- Sozlamalar

`✅` — funksiya yoqilgan, `⬜` — o‘chirilgan. **💾 Tayyor** bosilganda saqlanadi.

Permissionlar owner bo‘yicha ajratilgan: clone egasining adminlari asosiy owner adminlariga aralashmaydi.

## 3) VIP / PRO berish
Ruxsati bor admin:

- `/givevip USER_ID`
- `/givepro USER_ID`

Owner har doim barcha funksiyalarga ega.

## 4) Ban / Unban

- `/ban USER_ID [sabab]`
- `/unban USER_ID`

Banlangan foydalanuvchi `/start` va o‘yin callbacklaridan foydalana olmaydi.

## 5) Clone Bot — 100 Stars

`/shop` → **🧬 Clone Bot** → 100 Stars to‘lovi.

To‘lov tasdiqlangach 1 ta clone credit beriladi. Keyin `/clone` yoki Owner panel → **🧬 Clone Bots** → **🛠 Clone yaratish**.

### Muhim Telegram cheklovi
Telegram API BotFather o‘rniga yangi bot account/tokenni avtomatik yaratishga ruxsat bermaydi. Shuning uchun xarid qilingan 100 Stars **clone credit** bo‘ladi. Foydalanuvchi @BotFather orqali yangi bot yaratib, uning tokenini private chatda yuboradi. Bot tokenni tekshiradi, shifrlab bazaga saqlaydi va clone runtime'ni ishga tushiradi.

Clone quyidagi asosiy handlerlarni aynan shu loyiha kodidan ishlatadi: start, profile, language, game, callback, admin, economy, help, guide, owner, menu va group.

## 6) Clone aktivlari
Clone eventlari `clone_activity` jadvalida yoziladi. Owner statistikasi quyidagilarni ko‘rsatadi:

- clone events
- unique clone users
- unique clone chats
- clone games

Asosiy users/games bazasi umumiy bo‘lgani uchun clone o‘yinlari ham botning umumiy statistik aktiviga kiradi.

## 7) Clone boshqaruvi
Owner → **🧬 Clone Bots**:

- status
- event/user/chat/game statistikasi
- **▶️ Start**
- **⏹ Stop**
- **🗑 O‘chirish**

Restartdan keyin saqlangan faol clone tokenlari `clone/runner.js` orqali qayta ishga tushiriladi.

## 8) Token xavfsizligi
Clone tokeni AES-256-GCM bilan shifrlanadi. Production `.env` ichida kuchli `CLONE_TOKEN_SECRET` ishlating va uni hech qachon GitHub yoki chatga joylamang.

## 9) Stars to‘lov himoyasi
Successful payment qayta kelganda `telegram_payment_charge_id` bo‘yicha duplicate purchase qayta berilmaydi. Mahsulot narxi ham serverdagi konfiguratsiya bilan tekshiriladi.

## 10) Tavsiya etiladigan production sozlamalar

```env
BOT_TOKEN=...
OWNER_ID=123456789
ADMIN_IDS=
CLONE_PRICE_STARS=100
CLONE_TOKEN_SECRET=uzun-random-secret
DATABASE_PATH=./data/mafia.sqlite
```

Botni kanalga admin qilib qo‘ying va clone botlarni alohida BotFather accountlari sifatida yarating.


## 2026-09 Currency va majburiy bot huquqlari
- Asosiy botdagi `/shop` orqali clone krediti olinadi; clone botdan clone olish taqiqlangan.
- Clone narxi Owner tomonidan `CLONE_PRICE_STARS` yoki owner settings orqali boshqariladi.
- Owner currency narxlarini `/setprice money 10`, `/setprice coin 100`, `/setprice diamond 50` orqali o‘zgartiradi. Default: money past, diamond o‘rta, coin yuqori.
- Guruhda Mafia boshlashdan oldin botning admin huquqlari tekshiriladi. Banlash (`can_restrict_members`) va admin qo‘shish (`can_promote_members`) majburiy, shuningdek boshqaruv uchun asosiy admin huquqlari talab qilinadi.
- `/checkbot` guruhdagi bot huquqlarini tekshiradi.

- Owner panelda Clone narxi ham `/setprice clone_price 100` orqali runtime o‘zgartiriladi.
- Default valyuta narxlari: 💵 Money — 10 ⭐ (past), 💎 Diamond — 50 ⭐ (o‘rta), 🪙 Coin — 100 ⭐ (yuqori).
- `/checkbot` va `/mafia` oldidan botning admin huquqlari tekshiriladi; Banlash va Admin qo‘shish huquqlari albatta talab qilinadi.


## 11) Clone Owner — alohida owner panel
Clone yaratilgandan keyin clone egasi o‘z clone botida `/owner` yuboradi. Asosiy bot owneri emas, aynan clone xarid qilgan foydalanuvchi clone owner hisoblanadi.

Clone owner quyidagilarni boshqaradi:
- 🛡 Admin qo‘shish/o‘chirish
- 🔐 Admin permissionlarini alohida saqlash
- 📢 Shu clone uchun majburiy kanallar
- 🔨 Shu clone uchun ban/unban
- 📊 Clone statistika
- 🎮 O‘yin/economy/role/profile tizimlari

Asosiy botdagi adminlar va clone botdagi adminlar bir-biriga aralashmaydi. Clone egasi boshqa clone yaratolmaydi; clone xaridi faqat asosiy bot `/shop` qismidan qilinadi.

## 12) Clone runtime
Clone tokeni AES-256-GCM bilan shifrlanadi, restartdan keyin faol clone avtomatik ishga tushiriladi. Clone runtime asosiy Mafia handlerlaridan foydalanadi: start, profile, language, game, callback, admin, economy, help, guide, owner, menu, group, permissions, inline, ranking va referral.
