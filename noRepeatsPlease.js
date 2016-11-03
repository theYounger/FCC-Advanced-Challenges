function permAlone(str) {
  //Input validation
  if(typeof str !== 'string') {
    let err = new Error('Oops! We expected a string, but instead saw a ' + typeof str);
    throw err;
  }
  if(str.length < 1) {
    let err = new Error('Oops! We expected a string with characters');
    throw err;
  }

  //In which we find the number of permutations from the first index
  var strArr = str.split('');
  console.log(strArr);

  calcPerm(str);

  function calcPerm(str) {
    var length = str.length;
    var perms = 1;
    for(var i = length; i > 1; i--) {
      perms *= i;
    }

    var find = str.search('a', function() {

    });
    console.log('perms', perms);
  }

  return str;
}

permAlone('aba');

