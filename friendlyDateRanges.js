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

  var dateBeginArr = arr[0].split('-');
  var dataEndArr = arr[1].split('-');
  var beginMo = Number(dateBeginArr[1]);
  var endMo = Number(dataEndArr[1]);
  var moList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  //Convert month number to name
  dateBeginArr[1] = moList[beginMo - 1];
  dataEndArr[1] = moList[endMo - 1];

  return ordinalizeDate(dateBeginArr, dataEndArr);

  function ordinalizeDate(begin, end) {
    var ordinalDate;
    var beginYear = ', ' + begin[0];
    var endYear = ', ' + end[0];
    var endMonth = end[1] + ' ';

    //Check if within same year and month
    if(end[0] - begin[0] === 0) {
      endYear = '';
      if(endMo - beginMo === 0) {
        endMonth = '';
      }
    }
    if(end[0] - begin[0] === 1) {
      if(endMo - beginMo < 0) {
        endYear = '';
      }
      if(endMo - beginMo === 0) {
        if(end[2] - begin[2] < 0) {
          endYear = ''; end[1] = '';
        }
      }
    }
    if(begin[0] === '2016') {
      beginYear = '';
    }

    begin[2] = ordinalizeDay(begin[2]);
    end[2] = ordinalizeDay(end[2]);

    ordinalDate = [`${begin[1]} ${begin[2]}${beginYear}`, `${endMonth}${end[2]}${endYear}`];
    console.log(begin, end);
    return ordinalDate;
  }

  function ordinalizeDay(cardinalDate) {
    switch(cardinalDate) {
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
        return Number(cardinalDate) + 'th';
    }
  }
}

console.log(makeFriendlyDates(["2016-12-01", "2017-02-03"]) );
