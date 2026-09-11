const langs = {
  uz: require("../languages/uz"),
  ru: require("../languages/ru"),
  en: require("../languages/en")
};
function normalize(lang) { return langs[lang] ? lang : "uz"; }
function t(lang, key, vars = {}) {
  const dict = langs[normalize(lang)];
  let value = dict[key] || key;
  for (const [k, v] of Object.entries(vars)) value = value.replaceAll(`{${k}}`, String(v));
  return value;
}
function available() { return Object.keys(langs); }
module.exports = { t, normalize, available };
