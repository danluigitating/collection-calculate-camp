'use strict';

function choose_common_elements(collection_a, collection_b) {
  return collection_a.filter(m=> collection_b.includes(m))
}

module.exports = choose_common_elements;
