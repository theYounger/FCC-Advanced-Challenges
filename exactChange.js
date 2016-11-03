function checkCashRegister(price, cash, cid) {
  function changeBills(bills) {
    console.log('making bills');
  }

  function changeCoins(coins) {
    console.log('making coins');
  }

  function checkDivisibility(change) {
    cid.forEach()
  }

  var changeModel = {
    "ONE HUNDRED": 0,
    "TWENTY": 0,
    "TEN": 0,
    "FIVE": 0,
    "ONE": 0,
    "QUARTER": 0,
    "DIME": 0,
    "NICKEL": 0,
    "PENNY": 0
  };
  var change = cash - price;
  console.log('change', change);
  var bills = Math.floor(change);
  console.log('bills', bills);
  var coins = change - bills;
  console.log('coins', coins);

  if(change < 0) {
    return "Insufficient Funds";
  }
  if(change === 0) {
    return "Exact Payment -- No Change Required";
  }
  if(change > 0) {
    if(bills > 0) {
      changeBills(bills);
    }
    if(coins > 0) {
      return changeCoins(coins);
    }
  }

  // Here is your change, ma'am.
  return change;
}

var result = checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
console.log(result);
