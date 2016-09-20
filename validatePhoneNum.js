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
  if(numeralsOnly.length !== 10) {
    if(numeralsOnly.length !== 11) {
      return false;
    }
  }
  if(numeralsOnly.length === 10) {
    var flag10 = true;
    if(openParen !== -1 || closeParen !== -1) {
      if(openParen !== 0 || closeParen !== 4) {
        return false;
      }
      if(hyphen !== -1) {
        if(hyphen !== 8) {
          return false;
        }
        flag10 = false;
      }
    }
    if(hyphen !== -1 && flag10) {
      if(hyphen !== 3) {
        return false;
      }
    }
  }

  //11-length branch
  if(numeralsOnly.length === 11) {
    var flag11 = true;
    if(numeralsOnly[0] !== '1') {
      return false;
    }
    if(openParen !== -1 || closeParen !== -1) {
      if(openParen !== 1 || closeParen !== 5) {
        return false;
      }
      if(hyphen !== -1) {
        if(hyphen !== 9) {
          return false;
        }
        flag11 = false;
      }
    }
    if(hyphen !== -1 && flag11) {
      if(hyphen !== 4) {
        return false;
      }
    }
  }
  return true;
}
