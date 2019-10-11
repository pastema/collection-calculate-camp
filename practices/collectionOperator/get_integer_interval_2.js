'use strict';

function get_integer_interval_2(number_a, number_b) {
  var MAX = Math.max(number_a,number_b);
  var MIN = Math.min(number_a,number_b);
  var Result = [];

  for(MIN; MIN <= MAX; MIN++){
      Result.push(MIN);
  }
  if(number_a > number_b)
  {
    return Result.filter(number => number % 2 == 0).reverse();
  }
  return Result.filter(number => number % 2 == 0)
  
  
}

module.exports = get_integer_interval_2;
