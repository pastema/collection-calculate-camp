'use strict';
var number_map_to_word = function(collection){
  let number_map_to_word = collection
  .map(n => n+ 96)
  .map(c => String.fromCharCode(c));
  return number_map_to_word;
};

module.exports = number_map_to_word;
