function profile() {
  return { inline_keyboard: [[{ text: "🏆 Ranking", callback_data: "rank:global" }, { text: "💰 Economy", callback_data: "economy" }]] };
}
module.exports = { profile };
