const { t } = require("../services/language");
function lobby(lang="uz") {
  return { inline_keyboard: [
    [{ text: "🎯  Qo'shilish", callback_data: "game:join" }],
    [{ text: "▶️  START", callback_data: "game:start" }]
  ] };
}
function night(actions=[]) { return { inline_keyboard: actions.map(a => [{ text: a.label, callback_data: a.data }]) }; }
function vote(players=[]) { return { inline_keyboard: players.map(p => [{ text: `🗳  ${p.name}`, callback_data: `vote:${p.id}` }]) }; }
module.exports = { lobby, night, vote };
