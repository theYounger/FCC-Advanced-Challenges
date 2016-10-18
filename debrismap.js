
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  var opArr = arr.map(function(ele) {
    return {
      name: ele.name,
      orbitalPeriod: Math.round(2 * Math.PI * (Math.sqrt(Math.pow(earthRadius + ele.avgAlt, 3) / GM)))
    };
  });

  return opArr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
