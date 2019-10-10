'use strict';
var map_to_three_multiples = function(collections){
  let mapToThreeMultiples = collections.map(value => value * 3);
  return mapToThreeMultiples;
};

module.exports = map_to_three_multiples;
