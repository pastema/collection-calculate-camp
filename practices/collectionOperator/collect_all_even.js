'use strict';

function collect_all_even(collection) {
  var collect_all_even = collection.filter(number => number % 2 == 0);
  return collect_all_even;
}

module.exports = collect_all_even;
