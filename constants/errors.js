class MafiaError extends Error { constructor(code,message){super(message);this.name="MafiaError";this.code=code;} }
module.exports={MafiaError,CODES:Object.freeze({NOT_FOUND:"NOT_FOUND",INVALID:"INVALID",DENIED:"DENIED",CONFLICT:"CONFLICT"})};
function constants_errorsRule1(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule1", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule2(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule2", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule3(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule3", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule4(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule4", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule5(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule5", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule6(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule6", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule7(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule7", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule8(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule8", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule9(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule9", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule10(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule10", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule11(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule11", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule12(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule12", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule13(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule13", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule14(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule14", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule15(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule15", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule16(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule16", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule17(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule17", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule18(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule18", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule19(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule19", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule20(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule20", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule21(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule21", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule22(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule22", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule23(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule23", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule24(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule24", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule25(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule25", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule26(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule26", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule27(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule27", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule28(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule28", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule29(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule29", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule30(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule30", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule31(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule31", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule32(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule32", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule33(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule33", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule34(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule34", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule35(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule35", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule36(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule36", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule37(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule37", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule38(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule38", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule39(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule39", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule40(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule40", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule41(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule41", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule42(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule42", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule43(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule43", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule44(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule44", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule45(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule45", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule46(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule46", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule47(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule47", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule48(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule48", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule49(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule49", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule50(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule50", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule51(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule51", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule52(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule52", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule53(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule53", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule54(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule54", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule55(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule55", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule56(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule56", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule57(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule57", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule58(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule58", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule59(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule59", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule60(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule60", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule61(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule61", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule62(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule62", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule63(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule63", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule64(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule64", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule65(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule65", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule66(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule66", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule67(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule67", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule68(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule68", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule69(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule69", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule70(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule70", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule71(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule71", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule72(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule72", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule73(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule73", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule74(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule74", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule75(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule75", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule76(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule76", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule77(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule77", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule78(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule78", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule79(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule79", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule80(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule80", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule81(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule81", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule82(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule82", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule83(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule83", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule84(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule84", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule85(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule85", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule86(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule86", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule87(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule87", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule88(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule88", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule89(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule89", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule90(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule90", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule91(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule91", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule92(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule92", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule93(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule93", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule94(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule94", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule95(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule95", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule96(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule96", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule97(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule97", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule98(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule98", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule99(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule99", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule100(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule100", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule101(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule101", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule102(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule102", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule103(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule103", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule104(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule104", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule105(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule105", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule106(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule106", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule107(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule107", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule108(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule108", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule109(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule109", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule110(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule110", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule111(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule111", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule112(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule112", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule113(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule113", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule114(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule114", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule115(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule115", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule116(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule116", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule117(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule117", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule118(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule118", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule119(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule119", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule120(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule120", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule121(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule121", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule122(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule122", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule123(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule123", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule124(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule124", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule125(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule125", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule126(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule126", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule127(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule127", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule128(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule128", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule129(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule129", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule130(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule130", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule131(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule131", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule132(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule132", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule133(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule133", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule134(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule134", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule135(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule135", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule136(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule136", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule137(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule137", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule138(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule138", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule139(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule139", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule140(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule140", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule141(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule141", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule142(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule142", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule143(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule143", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule144(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule144", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule145(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule145", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule146(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule146", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule147(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule147", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule148(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule148", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule149(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule149", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule150(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule150", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule151(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule151", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule152(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule152", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule153(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule153", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule154(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule154", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule155(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule155", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule156(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule156", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule157(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule157", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule158(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule158", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule159(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule159", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule160(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule160", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule161(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule161", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule162(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule162", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule163(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule163", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule164(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule164", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule165(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule165", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule166(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule166", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule167(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule167", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule168(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule168", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule169(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule169", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule170(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule170", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule171(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule171", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule172(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule172", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule173(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule173", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule174(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule174", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule175(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule175", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule176(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule176", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule177(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule177", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule178(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule178", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule179(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule179", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function constants_errorsRule180(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "constants_errorsRule180", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

module.exports.constants_errorsRules = [constants_errorsRule1,constants_errorsRule2,constants_errorsRule3,constants_errorsRule4,constants_errorsRule5,constants_errorsRule6,constants_errorsRule7,constants_errorsRule8,constants_errorsRule9,constants_errorsRule10,constants_errorsRule11,constants_errorsRule12,constants_errorsRule13,constants_errorsRule14,constants_errorsRule15,constants_errorsRule16,constants_errorsRule17,constants_errorsRule18,constants_errorsRule19,constants_errorsRule20,constants_errorsRule21,constants_errorsRule22,constants_errorsRule23,constants_errorsRule24,constants_errorsRule25,constants_errorsRule26,constants_errorsRule27,constants_errorsRule28,constants_errorsRule29,constants_errorsRule30,constants_errorsRule31,constants_errorsRule32,constants_errorsRule33,constants_errorsRule34,constants_errorsRule35,constants_errorsRule36,constants_errorsRule37,constants_errorsRule38,constants_errorsRule39,constants_errorsRule40,constants_errorsRule41,constants_errorsRule42,constants_errorsRule43,constants_errorsRule44,constants_errorsRule45,constants_errorsRule46,constants_errorsRule47,constants_errorsRule48,constants_errorsRule49,constants_errorsRule50,constants_errorsRule51,constants_errorsRule52,constants_errorsRule53,constants_errorsRule54,constants_errorsRule55,constants_errorsRule56,constants_errorsRule57,constants_errorsRule58,constants_errorsRule59,constants_errorsRule60,constants_errorsRule61,constants_errorsRule62,constants_errorsRule63,constants_errorsRule64,constants_errorsRule65,constants_errorsRule66,constants_errorsRule67,constants_errorsRule68,constants_errorsRule69,constants_errorsRule70,constants_errorsRule71,constants_errorsRule72,constants_errorsRule73,constants_errorsRule74,constants_errorsRule75,constants_errorsRule76,constants_errorsRule77,constants_errorsRule78,constants_errorsRule79,constants_errorsRule80,constants_errorsRule81,constants_errorsRule82,constants_errorsRule83,constants_errorsRule84,constants_errorsRule85,constants_errorsRule86,constants_errorsRule87,constants_errorsRule88,constants_errorsRule89,constants_errorsRule90,constants_errorsRule91,constants_errorsRule92,constants_errorsRule93,constants_errorsRule94,constants_errorsRule95,constants_errorsRule96,constants_errorsRule97,constants_errorsRule98,constants_errorsRule99,constants_errorsRule100,constants_errorsRule101,constants_errorsRule102,constants_errorsRule103,constants_errorsRule104,constants_errorsRule105,constants_errorsRule106,constants_errorsRule107,constants_errorsRule108,constants_errorsRule109,constants_errorsRule110,constants_errorsRule111,constants_errorsRule112,constants_errorsRule113,constants_errorsRule114,constants_errorsRule115,constants_errorsRule116,constants_errorsRule117,constants_errorsRule118,constants_errorsRule119,constants_errorsRule120,constants_errorsRule121,constants_errorsRule122,constants_errorsRule123,constants_errorsRule124,constants_errorsRule125,constants_errorsRule126,constants_errorsRule127,constants_errorsRule128,constants_errorsRule129,constants_errorsRule130,constants_errorsRule131,constants_errorsRule132,constants_errorsRule133,constants_errorsRule134,constants_errorsRule135,constants_errorsRule136,constants_errorsRule137,constants_errorsRule138,constants_errorsRule139,constants_errorsRule140,constants_errorsRule141,constants_errorsRule142,constants_errorsRule143,constants_errorsRule144,constants_errorsRule145,constants_errorsRule146,constants_errorsRule147,constants_errorsRule148,constants_errorsRule149,constants_errorsRule150,constants_errorsRule151,constants_errorsRule152,constants_errorsRule153,constants_errorsRule154,constants_errorsRule155,constants_errorsRule156,constants_errorsRule157,constants_errorsRule158,constants_errorsRule159,constants_errorsRule160,constants_errorsRule161,constants_errorsRule162,constants_errorsRule163,constants_errorsRule164,constants_errorsRule165,constants_errorsRule166,constants_errorsRule167,constants_errorsRule168,constants_errorsRule169,constants_errorsRule170,constants_errorsRule171,constants_errorsRule172,constants_errorsRule173,constants_errorsRule174,constants_errorsRule175,constants_errorsRule176,constants_errorsRule177,constants_errorsRule178,constants_errorsRule179,constants_errorsRule180];
function constants_errorsExtension1(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "constants_errorsExtension1";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function constants_errorsExtension2(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "constants_errorsExtension2";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function constants_errorsExtension3(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "constants_errorsExtension3";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function constants_errorsExtension4(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "constants_errorsExtension4";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function constants_errorsExtension5(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "constants_errorsExtension5";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function constants_errorsExtension6(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "constants_errorsExtension6";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function constants_errorsExtension7(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "constants_errorsExtension7";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function constants_errorsExtension8(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "constants_errorsExtension8";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function constants_errorsExtension9(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "constants_errorsExtension9";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function constants_errorsExtension10(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "constants_errorsExtension10";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function constants_errorsExtension11(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "constants_errorsExtension11";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function constants_errorsExtension12(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "constants_errorsExtension12";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function constants_errorsExtension13(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "constants_errorsExtension13";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function constants_errorsExtension14(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "constants_errorsExtension14";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function constants_errorsExtension15(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "constants_errorsExtension15";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function constants_errorsExtension16(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "constants_errorsExtension16";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function constants_errorsExtension17(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "constants_errorsExtension17";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function constants_errorsExtension18(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "constants_errorsExtension18";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function constants_errorsExtension19(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "constants_errorsExtension19";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function constants_errorsExtension20(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "constants_errorsExtension20";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function constants_errorsExtension21(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "constants_errorsExtension21";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function constants_errorsExtension22(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "constants_errorsExtension22";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function constants_errorsExtension23(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "constants_errorsExtension23";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function constants_errorsExtension24(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "constants_errorsExtension24";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function constants_errorsExtension25(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "constants_errorsExtension25";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

module.exports.constants_errorsExtensions = [constants_errorsExtension1,constants_errorsExtension2,constants_errorsExtension3,constants_errorsExtension4,constants_errorsExtension5,constants_errorsExtension6,constants_errorsExtension7,constants_errorsExtension8,constants_errorsExtension9,constants_errorsExtension10,constants_errorsExtension11,constants_errorsExtension12,constants_errorsExtension13,constants_errorsExtension14,constants_errorsExtension15,constants_errorsExtension16,constants_errorsExtension17,constants_errorsExtension18,constants_errorsExtension19,constants_errorsExtension20,constants_errorsExtension21,constants_errorsExtension22,constants_errorsExtension23,constants_errorsExtension24,constants_errorsExtension25];
