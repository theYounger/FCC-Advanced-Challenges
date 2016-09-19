function telephoneCheck(phoneNum) {
  // Good luck!
  // Input validation
  var plainNumber = parseNumerals(phoneNum);
  console.log(plainNumber.length);
  if(typeof phoneNum !== 'string') {
    var err1 = new Error('Oops! Expected a string and instead received a ' + typeof str);
    throw err1;
  }

  if(plainNumber.length !== 10) {
    if(plainNumber.length === 11) {
      if(plainNumber[0] !== '1') {
        return false;
      }
      return;
    }
    return false;
  }

  console.log(plainNumber);

  function parseNumerals(phoneNum) {
    var str = '';
    for(var i = 0; i < phoneNum.length; i++) {
      if(phoneNum[i].charCodeAt() > 47) {
        str += (phoneNum[i]);
      }
    }
    console.log('str', str);
    return str;
  }
}



var check = telephoneCheck("1 (757) 622-7382");
console.log('check', check);