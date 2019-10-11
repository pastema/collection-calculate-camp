'use strict';

function get_integer_interval(number_a, number_b) {
  var MAX = Math.max(number_a,number_b);
  var MIN = Math.min(number_a,number_b);
  var Result = [];

  for(MIN; MIN <= MAX; MIN++){
      Result.push(MIN);
  }
  if(number_a > number_b)
  {
    return Result.filter(number => number).reverse();
  }
  return Result.filter(number => number)
  
}

module.exports = get_integer_interval;

