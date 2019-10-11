'use strict';

function collect_last_element(collection) {
return collection.reduce((i,x) => x);
}

module.exports = collect_last_element;
