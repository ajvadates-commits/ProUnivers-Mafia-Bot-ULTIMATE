# Pro uTag Bot — ULTIMATE (Render ready)

Telegram guruhlarida **userbot orqali xavfsiz UTag** qiluvchi bot.
Har bir guruhda **alohida UTag** ishlaydi.

## Qo‘shilgan/imkoniyatlar

- User yig‘ish natijasida guruh adminlari va oddiy a’zolar alohida ko‘rsatiladi.
- UTag uchun `/utag_optin` va `/utag_optout`; UTag faqat rozilik bergan userlarga ishlaydi.
- **UTag guruh bo‘limi (owner):** akkaunt **admin bo‘lgan guruhlar ro‘yxati** topiladi,
  ▶️ tugma bilan tanlangan guruhda UTag **darhol boshlanadi**.
- 🧲 **UTag + User terish** rejimi: UTag guruhlari menyusidagi tugma bilan yoqiladi.
  Tag qilingan userlar ham bazaga teriladi va yakunda **👮 adminlar / 👥 a’zolar
  alohida hisoblanadi** (user yig‘ish bo‘limida ham admin/a’zo alohida ko‘rsatiladi).
- ✨ **Premium stickerlar:** Owner profilidagi `UTag / Premium stickerlari` bo‘limiga
  oddiy yoki premium sticker qo‘shiladi; userbot (.u/.ru/▶️ UTag) ularni har bir tag
  bilan birga yuboradi (sticker akkauntda yuborilmasa o‘tkazib yuboriladi).
- 📨 **Modul tasdiqlash:** userbot bilan bog‘liq bo‘limlar (Avto Xabar, Avto Javob,
  So‘zlar Marketi, Safe PM, Safe Test, Safe UTag) oddiy a’zolarga faqat **owner
  tasdig‘i** bilan ochiladi; `user terish` va `UTag` bo‘limlari hamma uchun ochiq.
- Guruhda botni admin qilganda **to‘liq huquq** so‘raladi va tekshiriladi.
- Guruh ichida ham bevosita boshlash mumkin:
  - `.u` yoki `.su` — oddiy UTag
  - `.ru` — random so‘z bilan UTag
  - `.p` — pauza
  - `.f` — butunlay to‘xtatish
- Guruh UTag faqat akkaunt **admin bo‘lgan** guruhlarda ishlaydi (boshqa guruhda bosilmasa hech narsa bo‘lmaydi).
- Guruh UTag: `/utag_setup` huquqlarni tekshiradi, `/utag` opt-in userlarni
  belgilaydi; `/utag so‘z1, so‘z2` so‘zli UTag qiladi.
- Owner profilida `UTag stickerlari` bo‘limi orqali sticker qo‘shish/o‘chirish.
- Guruh yordamchisi: `/grouphelp`, `/welcome on|off`, `/goodbye on|off`,
  `/greet ...`, `/farewell ...`.
- Anti-Abuse: ban/kick/mute/unban harakatlari loglanadi.
- Action log: admin, target, amal, vaqt, sabab va bot chorasi saqlanadi.
- SQLite migratsiyasi mavjud bazani o‘chirmaydi.
- Render uchun health-check HTTP server `PORT` da ishlaydi.

## Ishga tushirish (lokal)

```bash
python -m pip install -r requirements.txt
cp .env.example .env   # qiymatlarni to‘ldiring
python pro.tag.10_updated.py
```

## Render — deploy

1. Ushbu reponi Render'da **New → Blueprint** bilan ulang (yoki `New → Web Service` → `Docker`).
2. Dashboardda **Environment** oynasida keraksiz o‘zgaruvchilarni kiritilganini tekshiring:
   `API_ID`, `API_HASH`, `BOT_TOKEN`, `ADMIN_ID` (default `8646327120`), `DB_FILE`, `PORT`.
3. `Dockerfile`, `render.yaml`, `Procfile` allaqachon tayyor.
4. (Ixtiyoriy) `SEND_SELF_TO_ADMIN=1` qo‘yilsa, bot ishga tushganda yangilangan
   `.py` va `.zip` fayllarni `ADMIN_ID` ga bir marta yuboradi.

Render Blueprint `render.yaml` da `sync: false` bo‘lgan o‘zgaruvchilar
dashboardda qo‘lda kiritiladi.

## Xavfsizlik chegarasi

Ommaviy shaxsiy-chat reydi, ruxsatsiz xabar yuborish, avtomatik ommaviy admin
qo‘shish yoki guruhni buzishga xizmat qiladigan flood/kick oqimi qo‘shilmagan.
PM Safe mavjud bo‘lsa, faqat bot bilan aloqa qilgan va rozilik bergan userlar
uchun ishlaydi; flood-limit qaytsa avtomatik to‘xtaydi.