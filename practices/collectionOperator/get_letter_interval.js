'use strict';

function get_letter_interval(number_a, number_b) {
  var MAX = Math.max(number_a,number_b);
  var MIN = Math.min(number_a,number_b);
  var Result = [];

  for(MIN; MIN <= MAX; MIN++){
      Result.push(MIN);
  }
  if(number_a > number_b)
  {
    return Result
    .map(n => n+ 96)
    .map(c => String.fromCharCode(c)).reverse();
  }
  return Result
  .map(n => n+ 96)
  .map(c => String.fromCharCode(c));
  
}

module.exports = get_letter_interval;
