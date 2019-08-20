const assert = require('assert');

/**
 * Question:
 * 
 * Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
 * For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
 * 
 */

 /**
  * Solution #1: O(n2)
  * Interate through the array and test the sum with each subsequent value
  */
 function isAddUpTo(array, k) {
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    for (let j = i + 1; j < array.length; j++) {
      const value2 = array[j];
      if (value + value2 === k) {
        return true;
      }
    }
  }
  return false;
 }

 assert.equal(isAddUpTo([10, 15, 3, 7], 17), true);
 assert.equal(isAddUpTo([], 10), false);
 assert.equal(isAddUpTo([5, 3, 2, 15], 8), true);
 assert.equal(isAddUpTo([1, 3, 2, 15], 1), false);

  /**
  * Solution #2: O(n)
  * Store each visited value in a `Set` object and check if it contains the complement of the current value to obtain the target
  */
 function isAddUpTo2(array, k) {
  if (array.length < 2) { return false; }

  const values = new Set();
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    if (values.has(k - value)) {
      return true;
    }
    values.add(value);
  }
  return false;
 }

 assert.equal(isAddUpTo2([10, 15, 3, 7], 10), true);
 assert.equal(isAddUpTo2([], 10), false);
 assert.equal(isAddUpTo2([5, 3, 2, 15], 8), true);
 assert.equal(isAddUpTo2([5, 3, 2, 15], 1), false);

 console.log('All tests passed!!');