const store=require("../database/economy");
async function getBalance(id){return await store.balance(id);}
async function deposit(id,amount,type="bonus"){if(!Number.isInteger(amount)||amount<=0)throw new Error("Invalid amount");await store.change(id,amount,type);}
async function withdraw(id,amount,type="purchase"){if((await store.balance(id))<amount)throw new Error("Insufficient balance");await store.change(id,-amount,type);}
async function history(id){return await store.history(id);}
async function recordStarsPurchase(userId,product,stars,chargeId){return await store.recordPurchase(userId,product,stars,chargeId);}
async function wallet(){return await store.wallet();}
module.exports={getBalance,deposit,withdraw,history,recordStarsPurchase,wallet};