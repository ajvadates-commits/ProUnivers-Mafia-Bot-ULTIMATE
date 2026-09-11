# ProUnivers Mafia Bot — ULTIMATE Production

## 1. Environment
Copy `.env.example` to `.env` and set:
- `BOT_TOKEN` — BotFather token
- `OWNER_ID` — owner's numeric Telegram ID
- `ADMIN_IDS` — optional comma-separated initial admins
- `DATABASE_PATH=./data/mafia.sqlite`
- `PORT=3000`

## 2. Start
`npm install`
`npm start`

## 3. Owner panel
Send `/owner` in private chat. The owner can add/remove admins and toggle permissions.

Useful direct commands:
- `/adminadd ID`
- `/admindel ID`
- `/adminperm ID permission on|off`
- `/adminlist`
- `/status`
- `/maintenance on|off`
- `/setsetting key value`
- `/broadcast TEXT`

## 4. 24/7
The bot runs Telegram long polling and exposes `/health` on the HTTP port. For platforms that sleep free web services, use an external uptime monitor to request `/health` periodically. The process itself cannot guarantee that a hosting provider will never suspend/sleep it.

## 5. Safety
Never commit `.env` or real bot tokens to GitHub. If a token has been exposed, revoke it in BotFather and generate a new one.
