'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

const jadenCase = _str => _str.replace(/^\w?|\s([\w])/g, c => c.toUpperCase())

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof jadenCase, 'function')
assert.strictEqual(jadenCase("how are you ?"), "How Are You ?")
// End of tests */
