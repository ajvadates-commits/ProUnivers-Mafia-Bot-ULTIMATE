'use strict';

const modules = {
  achievementEngine: require("./achievementEngine"),
  analyticsEngine: require("./analyticsEngine"),
  antiCheatEngine: require("./antiCheatEngine"),
  clanEngine: require("./clanEngine"),
  questEngine: require("./questEngine"),
  tournamentEngine: require("./tournamentEngine"),
  moderationEngine: require("./moderationEngine"),
  notificationEngine: require("./notificationEngine"),
  roleBalanceEngine: require("./roleBalanceEngine"),
  economyEngine: require("./economyEngine"),
  profileEngine: require("./profileEngine"),
  sessionEngine: require("./sessionEngine"),
  eventBus: require("./eventBus"),
  featureFlags: require("./featureFlags"),
  backupEngine: require("./backupEngine"),
  securityEngine: require("./securityEngine"),
};

function createAdvancedSuite(options={}) {
  const instances={};
  for (const [name, api] of Object.entries(modules)) {
    const Ctor = Object.values(api).find(v => typeof v === "function" && /Engine$|Bus$|Flags$|Security$/.test(v.name));
    instances[name] = Ctor ? new Ctor(options[name] || {}) : null;
  }
  return { modules, instances, createdAt: Date.now() };
}

module.exports={modules,createAdvancedSuite};
