'use strict';

function choose_no_repeat_number(collection) {
  console.log(collection.filter((x,i,a) => a.indexOf(x) == i));
  return collection.filter((x,i,a) => a.indexOf(x) == i);
}

module.exports = choose_no_repeat_number;
