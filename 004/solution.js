const assert = require('assert');

/**
 * Question:
 * 
 * Given an array of integers, find the first missing positive integer in linear time and constant space. 
 * In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.
 * For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.
 *  
 */

 /**
  * Solution #1: O(n)
  * Start the missing value as 1 and increment it every time the value is positive
  * @param {*} array 
  */
function findLowestPositive(array) {
  array.sort((a, b) => a - b);
  let missingValue = 1;
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    if (value > 0) {
      if (missingValue < value) { return missingValue; }
      missingValue++;
    }
  }
  return missingValue;
}

assert.equal(findLowestPositive([3, 4, -1, 1]), 2);
assert.equal(findLowestPositive([1, 2, 0]), 3);
assert.equal(findLowestPositive([2, 3, 7, 6, 8, -1, -10, 15]), 1);
assert.equal(findLowestPositive([-5]), 1);


/**
  * Solution #2: O(n)
  * Create a new list with the positives values and compare each value with its index
  * @param {*} array 
  */
function findLowestPositive2(array) {
  const positives = array.filter(x => x > 0);
  // Mark positives[i] as visited by making  
  // positives[i] negative. 
  // Note that 1 is subtracted because index start  
  // from 0 and positive numbers start from 1 
  for(let i = 0; i < positives.length; i++) { 
    const value = Math.abs(positives[i]); 
    if(value - 1 < positives.length && positives[value - 1] > 0) 
      positives[value - 1] = -positives[value - 1]; 
  }
  
  for(let i = 0; i < positives.length; i++) {
    if (positives[i] > 0) {
      return ++i; 
    }
  }
            
  return positives.length+1; 
}

assert.equal(findLowestPositive2([3, 4, -1, 1]), 2);
assert.equal(findLowestPositive2([1, 3, 4]), 2);
assert.equal(findLowestPositive2([2, 3, 7, 6, 8, -1, -10, 15]), 1);
assert.equal(findLowestPositive2([-5]), 1);