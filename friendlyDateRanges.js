
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
  var dateArrayEnd = arr[1].split('-');
  var beginMonth = Number(dateArrayBegin[1]);
  var endMonth = Number(dateArrayEnd[1]);

  //Convert month number to name
  dateArrayBegin[1] = monthList[beginMonth - 1];
  dateArrayEnd[1] = monthList[endMonth - 1];
  dateArrayBegin[2] = ordinalize(dateArrayBegin[2]);
  dateArrayEnd[2] = ordinalize(dateArrayEnd[2]);

  return finalConcat(dateArrayBegin, dateArrayEnd);

  function finalConcat(begin, end) {
    var finalArr;



    //Check if within same year and month
    if(begin[0] === end[0] && begin[0] === '2016') {
      if(begin[1] === end[1]) {
        begin[0] = null; end[0] = null; end[1] = null;
      }
    }
    if((end[0] - begin[0]) === 1 && (endMonth - beginMonth) <= 0) {
      if((endMonth - beginMonth) === 0) {
        if(end[2] - begin[2] <= 0) {
          begin[0] = null; end[0] = null; end[1] = null;
        }
      }
      begin[0]
    }


    finalArr = [`${begin[1]} ${begin[2]}, ${begin[0]}`, `${end[1]} ${end[2]}, ${end[0]}`];
    return finalArr;
  }

  function ordinalize(cardinalDay) {
    switch(cardinalDay) {
      case '01':
        return '1st';
      case '02':
        return '2nd';
      case '03':
        return '3rd';
      case '21':
        return '21st';
      case '22':
        return '22nd';
      case '23':
        return '23rd';
      case '31':
        return '31st';
      default:
        var num = Number(cardinalDay);
        return num + 'th';
    }
  }
}

console.log(makeFriendlyDates(['2016-07-01', '2016-07-04']));
