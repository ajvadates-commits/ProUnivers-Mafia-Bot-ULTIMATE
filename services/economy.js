const store=require("../database/economy");
function getBalance(id){return store.balance(id);}
function deposit(id,amount,type="bonus"){if(!Number.isInteger(amount)||amount<=0)throw new Error("Invalid amount");store.change(id,amount,type);}
function withdraw(id,amount,type="purchase"){if(store.balance(id)<amount)throw new Error("Insufficient balance");store.change(id,-amount,type);}
function history(id){return store.history(id);}
function recordStarsPurchase(userId,product,stars,chargeId){store.recordPurchase(userId,product,stars,chargeId);}
function wallet(){return store.wallet();}
module.exports={getBalance,deposit,withdraw,history,recordStarsPurchase,wallet};
