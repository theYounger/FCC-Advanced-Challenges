function checkCashRegister(price, cash, cid) {
  function changeBills(bills) {
    if(bills / 100 >= 1) {
    }
    if(bills / 20 >= 1) {

    }
    if(bills / 10 >= 1) {

    }
    if(bills / 5 >= 1)
  }

  function changeCoins(coins) {
    console.log('making coins');
  }

  function checkCid(cashType, cashAmount) {
    var registerTab = cid.find(function(element) {
      return element[0] = cashType;
    });

    if(registerTab[1] >= cashAmount) {
      changeArray.push([cashType, cashAmount]);
    } else {
      changeArray.push([cashType, cashAmount - registerTab[1]]);
    }
  }

  var changeArray = [];
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
      changeCoins(coins);
      return;
    }
  }

  // Here is your change, ma'am.
  return change;
}

var result = checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
console.log(result);
