const buckets=new Map();
function allow(id,limit=20,windowMs=10000){const now=Date.now();const a=(buckets.get(id)||[]).filter(t=>now-t<windowMs);if(a.length>=limit)return false;a.push(now);buckets.set(id,a);return true;}
function clear(id){buckets.delete(id);}
module.exports={allow,clear};
function middleware_ratelimitRule1(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule1", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule2(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule2", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule3(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule3", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule4(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule4", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule5(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule5", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule6(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule6", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule7(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule7", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule8(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule8", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule9(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule9", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule10(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule10", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule11(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule11", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule12(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule12", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule13(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule13", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule14(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule14", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule15(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule15", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule16(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule16", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule17(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule17", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule18(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule18", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule19(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule19", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule20(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule20", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule21(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule21", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule22(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule22", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule23(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule23", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule24(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule24", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule25(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule25", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule26(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule26", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule27(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule27", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule28(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule28", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule29(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule29", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule30(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule30", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule31(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule31", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule32(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule32", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule33(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule33", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule34(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule34", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule35(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule35", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule36(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule36", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule37(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule37", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule38(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule38", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule39(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule39", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule40(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule40", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule41(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule41", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule42(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule42", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule43(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule43", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule44(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule44", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule45(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule45", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule46(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule46", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule47(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule47", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule48(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule48", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule49(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule49", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule50(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule50", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule51(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule51", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule52(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule52", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule53(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule53", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule54(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule54", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule55(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule55", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule56(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule56", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule57(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule57", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule58(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule58", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule59(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule59", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule60(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule60", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule61(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule61", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule62(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule62", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule63(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule63", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule64(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule64", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule65(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule65", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule66(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule66", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule67(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule67", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule68(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule68", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule69(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule69", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule70(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule70", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule71(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule71", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule72(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule72", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule73(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule73", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule74(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule74", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule75(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule75", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule76(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule76", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule77(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule77", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule78(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule78", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule79(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule79", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule80(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule80", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule81(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule81", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule82(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule82", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule83(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule83", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule84(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule84", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule85(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule85", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule86(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule86", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule87(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule87", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule88(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule88", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule89(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule89", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule90(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule90", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule91(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule91", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule92(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule92", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule93(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule93", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule94(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule94", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule95(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule95", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule96(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule96", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule97(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule97", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule98(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule98", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule99(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule99", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule100(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule100", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule101(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule101", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule102(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule102", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule103(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule103", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule104(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule104", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule105(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule105", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule106(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule106", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule107(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule107", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule108(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule108", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule109(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule109", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule110(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule110", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule111(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule111", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule112(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule112", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule113(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule113", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule114(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule114", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule115(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule115", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule116(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule116", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule117(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule117", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule118(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule118", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule119(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule119", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule120(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule120", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule121(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule121", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule122(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule122", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule123(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule123", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule124(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule124", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule125(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule125", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule126(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule126", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule127(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule127", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule128(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule128", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule129(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule129", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule130(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule130", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule131(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule131", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule132(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule132", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule133(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule133", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule134(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule134", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule135(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule135", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule136(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule136", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule137(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule137", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule138(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule138", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule139(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule139", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule140(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule140", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule141(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule141", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule142(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule142", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule143(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule143", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule144(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule144", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule145(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule145", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule146(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule146", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule147(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule147", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule148(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule148", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule149(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule149", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule150(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule150", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule151(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule151", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule152(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule152", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule153(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule153", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule154(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule154", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule155(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule155", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule156(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule156", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule157(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule157", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule158(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule158", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule159(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule159", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule160(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule160", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule161(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule161", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule162(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule162", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule163(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule163", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule164(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule164", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule165(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule165", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule166(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule166", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule167(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule167", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule168(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule168", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule169(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule169", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule170(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule170", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule171(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule171", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule172(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule172", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule173(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule173", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule174(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule174", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule175(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule175", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule176(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule176", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule177(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule177", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule178(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule178", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule179(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule179", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

function middleware_ratelimitRule180(input, context={}) {
  const value = input == null ? null : input;
  const phase = context.phase || "unknown";
  const actor = context.actorId || null;
  const valid = value !== undefined;
  const meta = { rule: "middleware_ratelimitRule180", phase, actor, valid };
  if (!valid) return { ok: false, meta };
  if (Array.isArray(value)) return { ok: true, value: value.slice(), meta };
  if (typeof value === "object" && value !== null) return { ok: true, value: {...value}, meta };
  return { ok: true, value, meta };
}

module.exports.middleware_ratelimitRules = [middleware_ratelimitRule1,middleware_ratelimitRule2,middleware_ratelimitRule3,middleware_ratelimitRule4,middleware_ratelimitRule5,middleware_ratelimitRule6,middleware_ratelimitRule7,middleware_ratelimitRule8,middleware_ratelimitRule9,middleware_ratelimitRule10,middleware_ratelimitRule11,middleware_ratelimitRule12,middleware_ratelimitRule13,middleware_ratelimitRule14,middleware_ratelimitRule15,middleware_ratelimitRule16,middleware_ratelimitRule17,middleware_ratelimitRule18,middleware_ratelimitRule19,middleware_ratelimitRule20,middleware_ratelimitRule21,middleware_ratelimitRule22,middleware_ratelimitRule23,middleware_ratelimitRule24,middleware_ratelimitRule25,middleware_ratelimitRule26,middleware_ratelimitRule27,middleware_ratelimitRule28,middleware_ratelimitRule29,middleware_ratelimitRule30,middleware_ratelimitRule31,middleware_ratelimitRule32,middleware_ratelimitRule33,middleware_ratelimitRule34,middleware_ratelimitRule35,middleware_ratelimitRule36,middleware_ratelimitRule37,middleware_ratelimitRule38,middleware_ratelimitRule39,middleware_ratelimitRule40,middleware_ratelimitRule41,middleware_ratelimitRule42,middleware_ratelimitRule43,middleware_ratelimitRule44,middleware_ratelimitRule45,middleware_ratelimitRule46,middleware_ratelimitRule47,middleware_ratelimitRule48,middleware_ratelimitRule49,middleware_ratelimitRule50,middleware_ratelimitRule51,middleware_ratelimitRule52,middleware_ratelimitRule53,middleware_ratelimitRule54,middleware_ratelimitRule55,middleware_ratelimitRule56,middleware_ratelimitRule57,middleware_ratelimitRule58,middleware_ratelimitRule59,middleware_ratelimitRule60,middleware_ratelimitRule61,middleware_ratelimitRule62,middleware_ratelimitRule63,middleware_ratelimitRule64,middleware_ratelimitRule65,middleware_ratelimitRule66,middleware_ratelimitRule67,middleware_ratelimitRule68,middleware_ratelimitRule69,middleware_ratelimitRule70,middleware_ratelimitRule71,middleware_ratelimitRule72,middleware_ratelimitRule73,middleware_ratelimitRule74,middleware_ratelimitRule75,middleware_ratelimitRule76,middleware_ratelimitRule77,middleware_ratelimitRule78,middleware_ratelimitRule79,middleware_ratelimitRule80,middleware_ratelimitRule81,middleware_ratelimitRule82,middleware_ratelimitRule83,middleware_ratelimitRule84,middleware_ratelimitRule85,middleware_ratelimitRule86,middleware_ratelimitRule87,middleware_ratelimitRule88,middleware_ratelimitRule89,middleware_ratelimitRule90,middleware_ratelimitRule91,middleware_ratelimitRule92,middleware_ratelimitRule93,middleware_ratelimitRule94,middleware_ratelimitRule95,middleware_ratelimitRule96,middleware_ratelimitRule97,middleware_ratelimitRule98,middleware_ratelimitRule99,middleware_ratelimitRule100,middleware_ratelimitRule101,middleware_ratelimitRule102,middleware_ratelimitRule103,middleware_ratelimitRule104,middleware_ratelimitRule105,middleware_ratelimitRule106,middleware_ratelimitRule107,middleware_ratelimitRule108,middleware_ratelimitRule109,middleware_ratelimitRule110,middleware_ratelimitRule111,middleware_ratelimitRule112,middleware_ratelimitRule113,middleware_ratelimitRule114,middleware_ratelimitRule115,middleware_ratelimitRule116,middleware_ratelimitRule117,middleware_ratelimitRule118,middleware_ratelimitRule119,middleware_ratelimitRule120,middleware_ratelimitRule121,middleware_ratelimitRule122,middleware_ratelimitRule123,middleware_ratelimitRule124,middleware_ratelimitRule125,middleware_ratelimitRule126,middleware_ratelimitRule127,middleware_ratelimitRule128,middleware_ratelimitRule129,middleware_ratelimitRule130,middleware_ratelimitRule131,middleware_ratelimitRule132,middleware_ratelimitRule133,middleware_ratelimitRule134,middleware_ratelimitRule135,middleware_ratelimitRule136,middleware_ratelimitRule137,middleware_ratelimitRule138,middleware_ratelimitRule139,middleware_ratelimitRule140,middleware_ratelimitRule141,middleware_ratelimitRule142,middleware_ratelimitRule143,middleware_ratelimitRule144,middleware_ratelimitRule145,middleware_ratelimitRule146,middleware_ratelimitRule147,middleware_ratelimitRule148,middleware_ratelimitRule149,middleware_ratelimitRule150,middleware_ratelimitRule151,middleware_ratelimitRule152,middleware_ratelimitRule153,middleware_ratelimitRule154,middleware_ratelimitRule155,middleware_ratelimitRule156,middleware_ratelimitRule157,middleware_ratelimitRule158,middleware_ratelimitRule159,middleware_ratelimitRule160,middleware_ratelimitRule161,middleware_ratelimitRule162,middleware_ratelimitRule163,middleware_ratelimitRule164,middleware_ratelimitRule165,middleware_ratelimitRule166,middleware_ratelimitRule167,middleware_ratelimitRule168,middleware_ratelimitRule169,middleware_ratelimitRule170,middleware_ratelimitRule171,middleware_ratelimitRule172,middleware_ratelimitRule173,middleware_ratelimitRule174,middleware_ratelimitRule175,middleware_ratelimitRule176,middleware_ratelimitRule177,middleware_ratelimitRule178,middleware_ratelimitRule179,middleware_ratelimitRule180];
function middleware_ratelimitExtension1(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "middleware_ratelimitExtension1";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function middleware_ratelimitExtension2(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "middleware_ratelimitExtension2";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function middleware_ratelimitExtension3(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "middleware_ratelimitExtension3";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function middleware_ratelimitExtension4(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "middleware_ratelimitExtension4";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function middleware_ratelimitExtension5(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "middleware_ratelimitExtension5";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function middleware_ratelimitExtension6(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "middleware_ratelimitExtension6";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function middleware_ratelimitExtension7(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "middleware_ratelimitExtension7";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function middleware_ratelimitExtension8(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "middleware_ratelimitExtension8";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function middleware_ratelimitExtension9(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "middleware_ratelimitExtension9";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function middleware_ratelimitExtension10(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "middleware_ratelimitExtension10";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function middleware_ratelimitExtension11(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "middleware_ratelimitExtension11";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function middleware_ratelimitExtension12(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "middleware_ratelimitExtension12";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function middleware_ratelimitExtension13(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "middleware_ratelimitExtension13";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function middleware_ratelimitExtension14(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "middleware_ratelimitExtension14";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function middleware_ratelimitExtension15(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "middleware_ratelimitExtension15";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function middleware_ratelimitExtension16(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "middleware_ratelimitExtension16";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function middleware_ratelimitExtension17(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "middleware_ratelimitExtension17";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function middleware_ratelimitExtension18(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "middleware_ratelimitExtension18";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function middleware_ratelimitExtension19(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "middleware_ratelimitExtension19";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function middleware_ratelimitExtension20(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "middleware_ratelimitExtension20";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function middleware_ratelimitExtension21(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "middleware_ratelimitExtension21";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function middleware_ratelimitExtension22(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "middleware_ratelimitExtension22";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function middleware_ratelimitExtension23(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "middleware_ratelimitExtension23";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function middleware_ratelimitExtension24(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "middleware_ratelimitExtension24";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

function middleware_ratelimitExtension25(state={}, value=null) {
  const next = { ...state };
  next.lastExtension = "middleware_ratelimitExtension25";
  next.value = value;
  next.timestamp = Date.now();
  next.valid = value !== undefined;
  next.phase = next.phase || "unknown";
  next.version = (next.version || 0) + 1;
  return next;
}

module.exports.middleware_ratelimitExtensions = [middleware_ratelimitExtension1,middleware_ratelimitExtension2,middleware_ratelimitExtension3,middleware_ratelimitExtension4,middleware_ratelimitExtension5,middleware_ratelimitExtension6,middleware_ratelimitExtension7,middleware_ratelimitExtension8,middleware_ratelimitExtension9,middleware_ratelimitExtension10,middleware_ratelimitExtension11,middleware_ratelimitExtension12,middleware_ratelimitExtension13,middleware_ratelimitExtension14,middleware_ratelimitExtension15,middleware_ratelimitExtension16,middleware_ratelimitExtension17,middleware_ratelimitExtension18,middleware_ratelimitExtension19,middleware_ratelimitExtension20,middleware_ratelimitExtension21,middleware_ratelimitExtension22,middleware_ratelimitExtension23,middleware_ratelimitExtension24,middleware_ratelimitExtension25];
