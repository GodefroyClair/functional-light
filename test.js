const { Just } = require('./monad_kyle')
const { curry } = require('./toolbox')

const A = Just(10)
const B = Just(3)

function sum(x, y) {
  return x + y
}

const C = A.map(curry(sum))

const D = C.ap(B)

console.log(`D: ${D.inspect()}`)
