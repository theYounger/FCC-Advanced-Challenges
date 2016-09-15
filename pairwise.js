
function pairwise(arr, targetSum) {
  if(!Array.isArray(arr)) {
    var err = new Error('we are looking for an array, try again!');
    throw err;
  }
  if(arr.length === 0) {
    return 0;
  }
  //IF ARRAY HAS ENOUGH FOR A PAIR
  if(arr.length < 2) {
    var err = new Error('sorry no pairs to compare, try again!');
    throw err;
  }
  //IF ARRAY IS EMPTY OR NOT
  if(arr.length === 0) {
    return 0;
  }

  //END OF INPUT VALIDATION

  var indices = [];
  var sum = 0;

  arr.forEach(function(element, index, array) {
    var partOne = [element, index];
    var partTwo = targetSum - element;

    if(indices.indexOf(index) === -1) {
      for(var i = partOne[1] + 1; i < array.length; i++) {
          if(array[i] === partTwo) {
            if(indices.indexOf(i) === -1) {
              indices.push(i);
              sum += partOne[1] + i;
              console.log(sum, 'this is the sum');
              return;
            }
          }
      }
    }

  });

  return sum;
  }

pairwise([1,4,2,3,0,5], 7);
