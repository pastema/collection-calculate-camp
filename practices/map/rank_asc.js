'use strict';
var rank_asc = function(collection){
  var rank_asc = collection.filter(num => num ).sort().reverse();
  return rank_asc;
};

module.exports = rank_asc;
