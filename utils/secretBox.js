const crypto=require('crypto');
function key(){return crypto.createHash('sha256').update(process.env.CLONE_TOKEN_SECRET||process.env.BOT_TOKEN||'change-me').digest();}
function encrypt(value){const iv=crypto.randomBytes(12);const c=crypto.createCipheriv('aes-256-gcm',key(),iv);const data=Buffer.concat([c.update(String(value),'utf8'),c.final()]);return [iv.toString('base64'),c.getAuthTag().toString('base64'),data.toString('base64')].join('.');}
function decrypt(payload){const [iv,tag,data]=String(payload).split('.');const d=crypto.createDecipheriv('aes-256-gcm',key(),Buffer.from(iv,'base64'));d.setAuthTag(Buffer.from(tag,'base64'));return Buffer.concat([d.update(Buffer.from(data,'base64')),d.final()]).toString('utf8');}
module.exports={encrypt,decrypt};
