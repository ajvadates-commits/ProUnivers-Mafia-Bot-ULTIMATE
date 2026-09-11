# Owner qo‘shimcha funksiyalari

- **Adminlarga xabar:** Owner panel → 🧰 Owner Tools → 📣 Admin Message yoki `/adminmsg`. Xabar barcha aktiv owner-adminlarga yuboriladi va natija sanaladi.
- **PRO Groups:** `/progroup CHAT_ID TITLE PRICE CURRENCY INVITE_LINK`. `coin`, `money`, `diamond` valyutalari qo‘llanadi. Owner ro‘yxatni `/progroups` bilan ko‘radi.
- **Narxlar:** `/setprice money N`, `/setprice coin N`, `/setprice diamond N`, `/setprice clone_price N`.
- **Giveaway data modeli:** `database/ownerTools.js` giveaway va entry jadvallarini tayyorlaydi. Bu modul random winner va avtomatik mukofot tarqatish uchun kengaytiriladigan bazaga ega.

## Muhim
PRO group haqiqiy Telegram guruhiga o‘tishi uchun Owner haqiqiy `INVITE_LINK` kiritishi kerak. Bot foydalanuvchini Telegram ichida majburan boshqa guruhga qo‘sha olmaydi.
