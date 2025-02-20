'use strict';

var compute_median = require('../../practices/reduce/compute_median.js');

describe('compute_median', function () {
  var collection_a = [1, 1, 1, 2, 3];
  var collection_b = [1, 1, 2, 3];
  var collection_c = [1, 4, 6, 2, 3, 10, 9, 8, 11, 20, 19, 30];

  it('', function () {

    var result = compute_median(collection_a);
    expect(result).toEqual(1);
  });

  it('', function () {

    var result = compute_median(collection_b);
    expect(result).toEqual(1.5);
  });

  it('', function () {

    var result = compute_median(collection_c);
    expect(result).toEqual(8.5);
  })
});
