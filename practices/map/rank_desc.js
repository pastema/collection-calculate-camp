'use strict';
var rank_desc = function(collection){
  var rank_desc = collection.filter(num => num ).sort().reverse();
  return rank_desc;
};

module.exports = rank_desc;
