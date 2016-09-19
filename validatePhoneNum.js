function telephoneCheck(phoneNum) {
  var plainNumber = parseNumerals(phoneNum);

  //Input validation
  if(typeof phoneNum !== 'string') {
    var err1 = new Error('Oops! Expected a string and instead received a ' + typeof str);
    throw err1;
  }

  //Checks for number length with or withou country code 1
  if(plainNumber.length !== 10) {
    if(plainNumber.length === 11) {
      if(plainNumber[0] !== '1') {
        return false;
      }
      return;
    }
    return false;
  }

  function parseNumerals(phoneNum) {
    var str = '';
    for(var i = 0; i < phoneNum.length; i++) {
      if(phoneNum[i].charCodeAt() === 40) {
        if(phoneNum[i + 4].charCodeAt() !== 41) {
          return false;
        }
      }
      if(phoneNum[i].charCodeAt() === 41) {
        console.log(i);
        if(phoneNum[i - 4].charCodeAt() !== 40) {
          return false;
        }
      }
      if(phoneNum[i].charCodeAt() > 47) {
        str += (phoneNum[i]);
      }
    }
    return str;
  }
}

var check = telephoneCheck("555)-555-5555");

console.log('check', check);