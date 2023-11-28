function checkCashRegister(price, cash, cid) {
    const currencyUnit = [["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.1], ["QUARTER", 0.25], ["ONE", 1], ["FIVE", 5], ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED", 100]];
  
    let changeDue = cash - price;
    let changeArray = [];
    let totalCid = 0;
  
    // Calculate the total amount in cash-in-drawer
    for (let i = 0; i < cid.length; i++) {
      totalCid += cid[i][1];
    }
    totalCid = totalCid.toFixed(2);
  
    // Handle the CLOSED case
    if (Number(totalCid) === changeDue) {
      return { status: "CLOSED", change: cid };
    }
  
    // Calculate change to be given
    for (let i = currencyUnit.length - 1; i >= 0; i--) {
      const coinName = currencyUnit[i][0];
      const coinValue = currencyUnit[i][1];
      const availableCoins = cid[i][1];
  
      let numberOfCoins = Math.floor(changeDue / coinValue);
      let returnedCoins = numberOfCoins * coinValue;
  
      if (returnedCoins > availableCoins) {
        returnedCoins = availableCoins;
      }
  
      changeDue = (changeDue - returnedCoins).toFixed(2);
      if (returnedCoins > 0) {
        changeArray.push([coinName, returnedCoins]);
      }
    }
  
    // Handle INSUFFICIENT_FUNDS
    if (Number(changeDue) > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
  
    return { status: "OPEN", change: changeArray };
  }
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);