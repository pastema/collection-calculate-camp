'use strict';
var map_to_four_multiples_add_one = function(collection){
  let mapToFourMultiplesAddOne = collection.map(value => (value * 4) + 1);
  return mapToFourMultiplesAddOne;
};

module.exports = map_to_four_multiples_add_one;
