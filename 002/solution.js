const assert = require('assert');

/**
 * Question:
 * 
 * Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.
 * For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6]
 * 
 */

 /**
  * Solution #1: O(n2)
  * Interate through the array to get an item and then interate through it again to get product
  * @param {*} array 
  */
 function getProductArray(array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    let product = 1;
    for (let j = 0; j < array.length; j++) {
      if (i !== j) {
        product *= array[j];
      }
    }
    result.push(product);
  }
  return result;
 }

 assert.deepEqual(getProductArray([1, 2, 3, 4, 5]), [120, 60, 40, 30, 24]);
 assert.deepEqual(getProductArray([3, 2, 1]), [2, 3, 6]);
 assert.deepEqual(getProductArray([]), []);

 /**
  * Solution #2: O(n)
  * Interate through the array and get the full product and then interate through it again and divide the total product by the current item
  * @param {*} array 
  */
 function getProductArray2(array) {
  const product = array.reduce((prev, curr) => prev * curr, 1);
  return array.map((value) => product / value);
 }

 assert.deepEqual(getProductArray2([1, 2, 3, 4, 5]), [120, 60, 40, 30, 24]);
 assert.deepEqual(getProductArray2([3, 2, 1]), [2, 3, 6]);
 assert.deepEqual(getProductArray2([]), []);

 /**
  * Solution #3: O(n)
  * Chalenge: without division
  */
 function getProductArray3(array) {
  if (!array.length) { return []; }
  const left = [1];
  for (let i = 1; i < array.length; i++) {
    left[i] = array[i - 1] * left[i - 1];
  }
  const right = [];
  right[array.length - 1] = 1;
  for (let i = array.length - 1; i > 0; i--) {
    right[i - 1] = array[i] * right[i];
  }
  return left.map((value, index) => value * right[index]);
 }

 assert.deepEqual(getProductArray3([1, 2, 3, 4, 5]), [120, 60, 40, 30, 24]);
 assert.deepEqual(getProductArray3([3, 2, 1]), [2, 3, 6]);
 assert.deepEqual(getProductArray3([]), []);

 console.log('All tests passed!!');