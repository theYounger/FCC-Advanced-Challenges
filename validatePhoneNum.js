function telephoneCheck(str) {
  // Good luck!
  // Input validation
  var plainNumber = '';

  if(typeof str !== 'string') {
    var err1 = new Error('Oops! Expected a string and instead received a ' + typeof str);
    throw err1;
  }

  for(var i = 0; i < str.length; i++) {
    if(str[i].charCodeAt() > 47) {
      plainNumber.concat(str[i]);
    }
  }

  console.log(plainNumber);

  return true;
}



telephoneCheck("0 (757) 622-7382");