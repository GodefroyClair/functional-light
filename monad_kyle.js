// Just Monad
function Just(val) {
  return { map, chain, ap, inspect }

  // *********************

  function map(fn) {
    return Just(fn(val))
  }

  // aka: bind, flatMap
  function chain(fn) {
    return fn(val)
  }

  // unwrap the value for another monad
  function ap(anotherMonad) {
    return anotherMonad.map(val)
  }

  function inspect() {
    return `Just(${val})`
  }
}
// Maybe Monad
// RMQ: The Maybe monad is a particular pairing of two other simpler monads: Just and Nothing.
const Maybe = { Just, Nothing, of /* aka: unit, pure */: Just }

function Nothing() {
  return { map: Nothing, chain: Nothing, ap: Nothing, inspect }

  // *********************

  function inspect() {
    return 'Nothing'
  }
}

module.exports = {
  Just,
  Maybe,
}
