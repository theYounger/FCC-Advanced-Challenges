function updateInventory(arr1, arr2) {
  // All inventory must be accounted for or you're fired!

  //INPUT VALIDATION
  //CHECK IF THERE ARE TWO ARGUMENTS
  if(arguments.length !== 2) {
    var err = new Error('Oops! We were expecting two arguments and instead see ' + arguments.length);
    throw err;
  }
  //CHECK IF THE ARGUMENTS ARE ARRAYS
  for(var key in arguments) {
    var currArr = arguments[key];

    if(!Array.isArray(currArr)) {
      var err = new Error(currArr + ' is not an array');
      throw err;
    }

    currArr.forEach(function(element) {
      if(typeof element[0] !== 'number' && typeof element[1] !== 'string') {
        var err = new Error(element + ' is not properly')
      }
    });

    if(flag) {
      var err = one
    }
  }
  //CHECK IF INNER ARRAYS ARE COMPOSED OF TWO ARGUMENTS, FIRST A NUMBER, SECOND A STRING

}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
