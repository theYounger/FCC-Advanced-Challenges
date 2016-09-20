
function makeFriendlyDates(arr) {
  //Input validation
  if(!Array.isArray(arr)) {
    var err1 = new Error('Oops! We were expecting an array, but received a ' + typeof arr);
    throw err1;
  }

  if(arr.length !== 2) {
    var err2 = new Error('Oops! We were expecting two array elements, but received ' + arr.length);
    throw err2;
  }

  if(typeof arr[0] !== 'string' || typeof arr[1] !== 'string') {
    var err3 = new Error('Oops! We were expecting both elements to be strings');
    throw err3;
  }

  var monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var specialDaySuffix = [01, 02, 03, 21, 22, 23, 31];
  var dateArrayBegin = arr[0].split('-');
  var beginMonth = Number(dateArrayBegin);
  var dateArrayEnd = arr[1].split('-');

  console.log(beginMonth);

  return arr;
}

makeFriendlyDates(['2016-07-01', '2016-07-04']);
