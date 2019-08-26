const assert = require('assert');

/**
 * 
 * Question:
 * 
 * cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and last element of that pair. 
 * For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.
 * 
 * Given this implementation of cons:
 *
 * def cons(a, b):
 *    def pair(f):
 *       return f(a, b)
 *    return pair
 * Implement car and cdr.
 * 
 */

function cons(a, b) {
  function pair(f) {
    return f(a, b)
  }
  return pair;
}

/**
 * 
 * Execute the `execute` function to return the 1st parameter
 * 
 * @param {Function} execute 
 */
function car(execute) {
  return execute((a, b) => a);
}

/**
 * 
 * Execute the `execute` function to return the 2nd parameter
 * 
 * @param {Function} execute 
 */
function cdr(execute) {
  return execute((a, b) => b);
}

assert.equal(car(cons(3, 4)), 3);
assert.equal(cdr(cons(3, 4)), 4);