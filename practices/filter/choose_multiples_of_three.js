'use strict';

function choose_multiples_of_three(collection) {
    var multipleOfThree = collection.filter( number => number % 3 == 0)
    return multipleOfThree;
}

module.exports = choose_multiples_of_three;
