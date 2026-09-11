const { t } = require("../services/language");
function main(lang="uz") {
  return { keyboard: [[{ text: t(lang,"profile") }, { text: t(lang,"create") }], [{ text: t(lang,"language") }]], resize_keyboard: true };
}
module.exports = { main };
