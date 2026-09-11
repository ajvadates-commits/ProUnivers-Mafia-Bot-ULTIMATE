const assert=require('assert');
const roles=require('../game/roleCatalog');
const secret=require('../utils/secretBox');
assert.ok(roles.count()>=45,'Role catalog must contain 45+ roles');
const original='123456789:ABCDEFGHIJKLMNOPQRSTUVWXYZ_0123456789';
const encrypted=secret.encrypt(original);
assert.notStrictEqual(encrypted,original);
assert.strictEqual(secret.decrypt(encrypted),original);
console.log('SMOKE_OK roles=',roles.count());
