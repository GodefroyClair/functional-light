const { curry } = require('./toolbox')
const assert = require('assert').strict

// test 2 args
function sum2args(x, y) {
  return x + y
}

const curriedSum = curry(sum2args)
const add3 = curriedSum(3)
assert.equal(add3(5), 8)

function arg3(x, y, z) {
  return x + y + z
}
const curriedArg3 = curry(arg3, 3)
const add4 = curriedArg3(4)
const add4_5 = add4(5)
assert.strictEqual(add4_5(10), 19)

function sum(...nums) {
  var total = 0
  for (let num of nums) {
    total += num
  }
  return total
}
assert.equal(sum(1, 2, 3, 4, 5), 15)

// now with currying:
// (5 to indicate how many we should wait for)
var otherCurriedSum = curry(sum, 5)
assert.equal(otherCurriedSum(1)(2)(3)(4)(5), 15)
