'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  return collection_a.filter(num => num % 2 == 0 ? num : num % 3 == 0 ? num : num % 5 == 0);
}

module.exports = choose_divisible_integer;
