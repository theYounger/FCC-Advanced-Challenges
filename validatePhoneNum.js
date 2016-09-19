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

  //10-length branch
  if(numeralsOnly.length === 10) {
    if(openParen !== -1 || closeParen !== -1) {
      if(openParen !== 0 && closeParen !== 4) {
        return false;
      }
      if(hyphen !== -1) {
        if(hyphen !== 8) {
          return false;
        }
      }
    }
    if(hyphen !== -1) {
      if(hyphen !== 4) {
        return false;
      }
    }
    return;
  }
    //check for hypens at specific points

  //11-length branch
  if(numeralsOnly.length === 11) {
    if(numeralsOnly[0] !== 1) {
      return false;
    }
    if(openParen !== -1 || closeParen !== -1) {
      if(openParen !== 1 || closeParen !== 5) {
        return false;
      }
    }
    if(hyphen !== -1) {
      console.log(hyphen, 'hyphen');
      if(hyphen !== 9) {
        return false;
      }
    }
    return;
  }
  return true;
}

var check = telephoneCheck("0 (757) 622-7382");

console.log('check', check);