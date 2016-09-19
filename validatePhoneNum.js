function telephoneCheck(phoneNum) {
  // var plainNumber = parseNumerals(phoneNum);

  //Input validation
  if(typeof phoneNum !== 'string') {
    var err1 = new Error('Oops! Expected a string and instead received a ' + typeof str);
    throw err1;
  }

  /*=============
  =====WITH REGEX
  ==============*/
  var numeralsOnly = phoneNum.match(/\d/g);
  var noSpaces = phoneNum.replace(/\s/g, '');
  var openParen = noSpaces.search(/\(/g);
  var closeParen = noSpaces.search(/\)/g);
  var hyphen = noSpaces.search(/\-/g);
  console.log('hyphen', hyphen);
  //10-length branch
  if(numeralsOnly.length !== 10) {
    if(numeralsOnly.length !== 11) {
      console.log('here1');
      return false;
    }
  }
  if(numeralsOnly.length === 10) {
    var flag10 = true;
    if(openParen !== -1 || closeParen !== -1) {
      if(openParen !== 0 && closeParen !== 4) {
        console.log('here2');
        return false;
      }
      if(hyphen !== -1) {
        if(hyphen !== 8) {
          console.log('here3');
          return false;
        }
        flag10 = false;
      }
    }
    if(hyphen !== -1 && flag10) {
      if(hyphen !== 3) {
        console.log('here4');
        return false;
      }
    }
  }

  //11-length branch
  if(numeralsOnly.length === 11) {
    var flag11 = true;
    if(numeralsOnly[0] !== '1') {
      console.log('here5');
      return false;
    }
    if(openParen !== -1 || closeParen !== -1) {
      if(openParen !== 1 || closeParen !== 5) {
        console.log('here6');
        return false;
      }
      if(hyphen !== -1) {
        console.log(hyphen, 'hyphen');
        if(hyphen !== 9) {
          console.log('here7');
          return false;
        }
        flag11 = false;
      }
    }
    if(hyphen !== -1 && flag11) {
      if(hyphen !== 4) {
        console.log('here7');
        return false;
      }
    }
  }
  return true;
}

var check = telephoneCheck("(6505552368)")

console.log('check', check);