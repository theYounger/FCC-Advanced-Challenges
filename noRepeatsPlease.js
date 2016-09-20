function permAlone(str) {
  //Input validation
  if(typeof str !== 'string') {
    var err = new Error('Oops! We expected a string, but instead saw a ' + typeof str);
    throw err;
  }


  return str;
}

permAlone('aab');
