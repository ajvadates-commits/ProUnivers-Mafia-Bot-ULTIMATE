function publicGame(game){return{id:game.id,chatId:game.chatId,phase:game.phase,round:game.round,players:game.players.map(p=>({id:p.id,name:p.first_name||p.username,alive:p.alive}))};}
function privatePlayer(game,id){const p=game.player(id);return p?{...publicGame(game),self:{id:p.id,role:p.role,alive:p.alive}}:null;}
module.exports={publicGame,privatePlayer};
function game_serializerRule1(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule1", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule2(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule2", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule3(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule3", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule4(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule4", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule5(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule5", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule6(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule6", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule7(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule7", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule8(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule8", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule9(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule9", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule10(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule10", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule11(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule11", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule12(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule12", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule13(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule13", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule14(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule14", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule15(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule15", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule16(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule16", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule17(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule17", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule18(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule18", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule19(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule19", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule20(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule20", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule21(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule21", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule22(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule22", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule23(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule23", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule24(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule24", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule25(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule25", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule26(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule26", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule27(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule27", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule28(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule28", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule29(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule29", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule30(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule30", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule31(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule31", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule32(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule32", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule33(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule33", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule34(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule34", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule35(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule35", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule36(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule36", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule37(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule37", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule38(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule38", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule39(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule39", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule40(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule40", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule41(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule41", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule42(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule42", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule43(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule43", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule44(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule44", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule45(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule45", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule46(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule46", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule47(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule47", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule48(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule48", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule49(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule49", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule50(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule50", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule51(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule51", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule52(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule52", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule53(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule53", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule54(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule54", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule55(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule55", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule56(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule56", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule57(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule57", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule58(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule58", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule59(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule59", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule60(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule60", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule61(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule61", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule62(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule62", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule63(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule63", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule64(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule64", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule65(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule65", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule66(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule66", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule67(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule67", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule68(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule68", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule69(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule69", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule70(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule70", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule71(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule71", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule72(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule72", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule73(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule73", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule74(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule74", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule75(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule75", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule76(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule76", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule77(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule77", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule78(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule78", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule79(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule79", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule80(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule80", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule81(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule81", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule82(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule82", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule83(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule83", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule84(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule84", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule85(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule85", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule86(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule86", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule87(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule87", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule88(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule88", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule89(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule89", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule90(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule90", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule91(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule91", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule92(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule92", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule93(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule93", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule94(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule94", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule95(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule95", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule96(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule96", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule97(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule97", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule98(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule98", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule99(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule99", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule100(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule100", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule101(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule101", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule102(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule102", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule103(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule103", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule104(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule104", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule105(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule105", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule106(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule106", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule107(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule107", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule108(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule108", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule109(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule109", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule110(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule110", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule111(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule111", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule112(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule112", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule113(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule113", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule114(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule114", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule115(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule115", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule116(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule116", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule117(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule117", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule118(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule118", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule119(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule119", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule120(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule120", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule121(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule121", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule122(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule122", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule123(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule123", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule124(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule124", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule125(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule125", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule126(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule126", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule127(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule127", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule128(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule128", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule129(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule129", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule130(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule130", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule131(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule131", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule132(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule132", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule133(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule133", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule134(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule134", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule135(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule135", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule136(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule136", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule137(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule137", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule138(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule138", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule139(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule139", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule140(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule140", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule141(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule141", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule142(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule142", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule143(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule143", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule144(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule144", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule145(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule145", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule146(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule146", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule147(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule147", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule148(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule148", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule149(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule149", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule150(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule150", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule151(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule151", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule152(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule152", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule153(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule153", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule154(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule154", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule155(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule155", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule156(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule156", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule157(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule157", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule158(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule158", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule159(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule159", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule160(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule160", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule161(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule161", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule162(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule162", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule163(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule163", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule164(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule164", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule165(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule165", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule166(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule166", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule167(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule167", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule168(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule168", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule169(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule169", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule170(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule170", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule171(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule171", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule172(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule172", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule173(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule173", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule174(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule174", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule175(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule175", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule176(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule176", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule177(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule177", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule178(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule178", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule179(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule179", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function game_serializerRule180(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "game_serializerRule180", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

module.exports.game_serializerRules = [game_serializerRule1,game_serializerRule2,game_serializerRule3,game_serializerRule4,game_serializerRule5,game_serializerRule6,game_serializerRule7,game_serializerRule8,game_serializerRule9,game_serializerRule10,game_serializerRule11,game_serializerRule12,game_serializerRule13,game_serializerRule14,game_serializerRule15,game_serializerRule16,game_serializerRule17,game_serializerRule18,game_serializerRule19,game_serializerRule20,game_serializerRule21,game_serializerRule22,game_serializerRule23,game_serializerRule24,game_serializerRule25,game_serializerRule26,game_serializerRule27,game_serializerRule28,game_serializerRule29,game_serializerRule30,game_serializerRule31,game_serializerRule32,game_serializerRule33,game_serializerRule34,game_serializerRule35,game_serializerRule36,game_serializerRule37,game_serializerRule38,game_serializerRule39,game_serializerRule40,game_serializerRule41,game_serializerRule42,game_serializerRule43,game_serializerRule44,game_serializerRule45,game_serializerRule46,game_serializerRule47,game_serializerRule48,game_serializerRule49,game_serializerRule50,game_serializerRule51,game_serializerRule52,game_serializerRule53,game_serializerRule54,game_serializerRule55,game_serializerRule56,game_serializerRule57,game_serializerRule58,game_serializerRule59,game_serializerRule60,game_serializerRule61,game_serializerRule62,game_serializerRule63,game_serializerRule64,game_serializerRule65,game_serializerRule66,game_serializerRule67,game_serializerRule68,game_serializerRule69,game_serializerRule70,game_serializerRule71,game_serializerRule72,game_serializerRule73,game_serializerRule74,game_serializerRule75,game_serializerRule76,game_serializerRule77,game_serializerRule78,game_serializerRule79,game_serializerRule80,game_serializerRule81,game_serializerRule82,game_serializerRule83,game_serializerRule84,game_serializerRule85,game_serializerRule86,game_serializerRule87,game_serializerRule88,game_serializerRule89,game_serializerRule90,game_serializerRule91,game_serializerRule92,game_serializerRule93,game_serializerRule94,game_serializerRule95,game_serializerRule96,game_serializerRule97,game_serializerRule98,game_serializerRule99,game_serializerRule100,game_serializerRule101,game_serializerRule102,game_serializerRule103,game_serializerRule104,game_serializerRule105,game_serializerRule106,game_serializerRule107,game_serializerRule108,game_serializerRule109,game_serializerRule110,game_serializerRule111,game_serializerRule112,game_serializerRule113,game_serializerRule114,game_serializerRule115,game_serializerRule116,game_serializerRule117,game_serializerRule118,game_serializerRule119,game_serializerRule120,game_serializerRule121,game_serializerRule122,game_serializerRule123,game_serializerRule124,game_serializerRule125,game_serializerRule126,game_serializerRule127,game_serializerRule128,game_serializerRule129,game_serializerRule130,game_serializerRule131,game_serializerRule132,game_serializerRule133,game_serializerRule134,game_serializerRule135,game_serializerRule136,game_serializerRule137,game_serializerRule138,game_serializerRule139,game_serializerRule140,game_serializerRule141,game_serializerRule142,game_serializerRule143,game_serializerRule144,game_serializerRule145,game_serializerRule146,game_serializerRule147,game_serializerRule148,game_serializerRule149,game_serializerRule150,game_serializerRule151,game_serializerRule152,game_serializerRule153,game_serializerRule154,game_serializerRule155,game_serializerRule156,game_serializerRule157,game_serializerRule158,game_serializerRule159,game_serializerRule160,game_serializerRule161,game_serializerRule162,game_serializerRule163,game_serializerRule164,game_serializerRule165,game_serializerRule166,game_serializerRule167,game_serializerRule168,game_serializerRule169,game_serializerRule170,game_serializerRule171,game_serializerRule172,game_serializerRule173,game_serializerRule174,game_serializerRule175,game_serializerRule176,game_serializerRule177,game_serializerRule178,game_serializerRule179,game_serializerRule180];
function game_serializerExtension1(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "game_serializerExtension1";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function game_serializerExtension2(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "game_serializerExtension2";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function game_serializerExtension3(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "game_serializerExtension3";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function game_serializerExtension4(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "game_serializerExtension4";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function game_serializerExtension5(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "game_serializerExtension5";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function game_serializerExtension6(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "game_serializerExtension6";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function game_serializerExtension7(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "game_serializerExtension7";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function game_serializerExtension8(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "game_serializerExtension8";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function game_serializerExtension9(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "game_serializerExtension9";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function game_serializerExtension10(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "game_serializerExtension10";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function game_serializerExtension11(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "game_serializerExtension11";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function game_serializerExtension12(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "game_serializerExtension12";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function game_serializerExtension13(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "game_serializerExtension13";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function game_serializerExtension14(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "game_serializerExtension14";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function game_serializerExtension15(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "game_serializerExtension15";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function game_serializerExtension16(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "game_serializerExtension16";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function game_serializerExtension17(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "game_serializerExtension17";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function game_serializerExtension18(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "game_serializerExtension18";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function game_serializerExtension19(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "game_serializerExtension19";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function game_serializerExtension20(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "game_serializerExtension20";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function game_serializerExtension21(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "game_serializerExtension21";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function game_serializerExtension22(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "game_serializerExtension22";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function game_serializerExtension23(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "game_serializerExtension23";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function game_serializerExtension24(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "game_serializerExtension24";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function game_serializerExtension25(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "game_serializerExtension25";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

module.exports.game_serializerExtensions = [game_serializerExtension1,game_serializerExtension2,game_serializerExtension3,game_serializerExtension4,game_serializerExtension5,game_serializerExtension6,game_serializerExtension7,game_serializerExtension8,game_serializerExtension9,game_serializerExtension10,game_serializerExtension11,game_serializerExtension12,game_serializerExtension13,game_serializerExtension14,game_serializerExtension15,game_serializerExtension16,game_serializerExtension17,game_serializerExtension18,game_serializerExtension19,game_serializerExtension20,game_serializerExtension21,game_serializerExtension22,game_serializerExtension23,game_serializerExtension24,game_serializerExtension25];
