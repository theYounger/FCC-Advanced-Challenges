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
  var hypen = noSpaces.search(/\-/g);

  //10-length branch
  if(numeralsOnly.length === 10) {
    //check for open parens at specific points
    if(openParen !== -1 && closeParen !== -1) {
      if(openParen !== 0 && closeParen !== 4) {
        return false;
      }
      return;
    }
    //check for hypens at specific points

  }

  //11-length branch
  if(numeralsOnly.length === 11) {
    if(openParen !== -1 && closeParen !== -1) {
      if(openParen !== 1 && closeParen !== 5) {
        return false;
      }
      return;
    }
  }
}







  /*=============
  ======W/O REGEX
  ==============*/

  //Checks for number length with or withou country code 1
//   if(plainNumber.length !== 10) {
//     if(plainNumber.length === 11) {
//       if(plainNumber[0] !== '1') {
//         return false;
//       }
//       return;
//     }
//     return false;
//   }

//   function parseNumerals(phoneNum) {
//     var str = '';
//     for(var i = 0; i < phoneNum.length; i++) {
//       if(phoneNum[i].charCodeAt() === 40) {
//         if(phoneNum[i + 4].charCodeAt() !== 41) {
//           return false;
//         }
//       }
//       if(phoneNum[i].charCodeAt() === 41) {
//         console.log(i);
//         if(phoneNum[i - 4].charCodeAt() !== 40) {
//           return false;
//         }
//       }
//       if(phoneNum[i].charCodeAt() > 47) {
//         str += (phoneNum[i]);
//       }
//     }
//     return str;
//   }
// }

var check = telephoneCheck("0 (757) 622-7382");

console.log('check', check);