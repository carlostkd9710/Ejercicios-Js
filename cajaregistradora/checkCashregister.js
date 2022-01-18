function checkCashRegister(price, cash, cid) {
    let changeSum = cash*100 - price*100;
    let changeSumCheck = changeSum;
    let change = [];
    let status = "";

    let cidSum = 0;
    let filterCid = cid.filter(element => element[1] !== 0).reverse();

    filterCid.forEach(element => {
        let curr = element[0];
        let currSum = element[1] * 100;
        cidSum += currSum;
        let amount = 0;
        while (changeSum >= currencyUnit[curr] && currSum>0) {
            amount += currencyUnit[curr];
            changeSum -= currencyUnit[curr];
            currSum -= currencyUnit[curr];
        }
        if (amount !== 0) {
            change.push([curr,amount/100]);
        }
    });

    if (changeSum>0) {
        status = 'INSUFFICIENT_FUNDS';
        change = [];
    } else if(changeSum == 0 && changeSumCheck == cidSum){
        status = 'CLOSED';
        change = cid;
    }else{
        status = 'OPEN';
    }
    return { 'status': status, 'change':change};
  }

const currencyUnit = {
    "PENNY": 1,
    "NICKEL": 5,
    "DIME": 10,
    "QUARTER":25,
    "ONE":100,
    "FIVE":500,
    "TEN":1000,
    "TWENTY":2000,
    "ONE HUNDRED":10000
}
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);