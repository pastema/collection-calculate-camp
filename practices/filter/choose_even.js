'use strict';

function choose_even(collection) {
  let evenNumbers = collection.filter(number => number % 2 == 0)
  return evenNumbers;
}

module.exports = choose_even;
