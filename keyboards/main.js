const { t } = require("../services/language");
const config = require("../config");
function main(lang="uz") {
  return {
    keyboard: [
      [{ text: t(lang,"profile") }, { text: t(lang,"create") }],
      [{ text: t(lang,"language") }],
      [{ text: "🎮 Mini App", web_app: { url: config.appUrl } }]
    ],
    resize_keyboard: true
  };
}
module.exports = { main };
