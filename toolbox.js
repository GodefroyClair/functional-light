// To warmup: 2 arguments currying function
// function curry(fn) {
//   return function partial(x) {
//     return function final(y) {
//       return fn(x, y)
//     }
//   }
// }

function curry(fn, arity = fn.length) {
  // IIFE nextCurried replaces a list to hold previous arguments
  return (function nextCurried(prevArgs) {
    return function curried(nextArg) {
      const args = [...prevArgs, nextArg]
      // console.log(`args length: ${args.length}`)

      if (args.length >= arity) {
        return fn(...args)
      } else {
        return nextCurried(args)
      }
    }
  })([])
}

module.exports = {
  curry,
}
