'use strict';

function choose_no_repeat_number(collection) {
  const unique = (x, i, a) => a.indexOf(x) == i // a = [1, 1, 1, 2, 2, 3, 4]; 
  // for(var i = 0; i <= collection.length; i++)
  // {
  //   if(collection.indexOf(collection[i]) == i)
  //   {
  //       console.log('condition: ' + (collection.indexOf(collection[i])) +  ' element: ' + collection[i] + ' ' + i + ' true');
  //   }
  //   else {
  //     console.log('condition: ' + (collection.indexOf(collection[i])) +  ' element: ' + collection[i] + ' ' + i + ' false');
  //   }
  // }
  return collection.filter(unique);
}

module.exports = choose_no_repeat_number;
