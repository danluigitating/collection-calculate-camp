'use strict';

function choose_even(collection) {
  return collection.filter(collection => collection %2===0);
}

module.exports = choose_even;
