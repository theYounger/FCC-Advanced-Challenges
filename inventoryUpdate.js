function updateInventory(arr1, arr2) {
  //**Input Validation**
  //Check for two arguments
  if(arguments.length !== 2) {
    var err1 = new Error('Oops! We were expecting two arguments and instead see ' + arguments.length);
    throw err1;
  }

  //Check argument types are arrays
  for(var key in arguments) {
    var currArr = arguments[key];

    if(!Array.isArray(currArr)) {
      var err2 = new Error(currArr + ' is not an array');
      throw err2;
    }

    //Check arrays are two-dimensional with a number and string in that order
    currArr.forEach(function(element) {
      if(typeof element[0] !== 'number' || typeof element[1] !== 'string') {
        var err3 = new Error(element + ' is improperly composed');
        throw err3;
      }
    });
  }

  return invUpdater(arr1, arr2);

  function invUpdater(currInv, addInv) {
    var unmatched;
    var unmatchedArr = [];
    var matchedArr = [];
    var i;

    if(currInv.length === 0) {
      return currInv.concat(addInv).sort(itemNameCompare);
    }

    if(addInv.length === 0) {
      return currInv.sort(itemNameCompare);
    }

    if(currInv.length >= addInv.length) {
      for(i = 0; i < currInv.length; i++) {
        var match = addInv.find(itemMatcher);
        if(match === undefined) {
          unmatchedArr.push(unmatched);
        } else {
          currInv[i] = [currInv[i][0] + match[0], match[1]];
          matchedArr.push(match[1]);
        }
      }
      return currInv.concat(unmatchedArr).sort(itemNameCompare);
    }

    function itemMatcher(addItem) {
      if(addItem[1] === currInv[i][1]) {
        return addItem[1] === currInv[i][1];
      }
      if(unmatchedArr.indexOf(addItem) === -1 && matchedArr.indexOf(addItem[1]) === -1) {
        unmatched = addItem;
      }
    }


    function itemNameCompare(a, b) {
      if(a[1] <  b[1]) {
        return -1;
      }
      if(a[1] > b[1]) {
        return 1;
      }
      if(a[1] === b[1]) {
        return 0;
      }
    }
  }
}

// Example inventory lists
var currInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var addInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

var updated = updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], []);
console.log('updated', updated);

// updateInventory(currInv, addInv);