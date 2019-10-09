'use strict';

function grouping_count(collection) {
  const unique = (x, i, a) => {
    let finalValue = [];
    let distinctValue = new Set(a); // gete unique
    distinctValue.forEach(value => { // 
        let count = 0;
        a.forEach(occur =>{
            if(value == occur){
              count++;
            }
        })
        finalValue[value.toString()] = count;   
    })
    console.log(finalValue);
  }
  return collection.filter(unique);
}

module.exports = grouping_count;
