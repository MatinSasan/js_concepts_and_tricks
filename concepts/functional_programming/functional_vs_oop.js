// In an object-oriented flavor of programming, we could chain method calls:

new Array(1, 2, 3, 4).filter(x => x % 2 === 0).reduce((mem, x) => mem + x);

// When it comes to functional programming, we would typically strive for small, reusable functions.
//  We could then express a chain of operations by composing these functions

const isEven = x => x % 2 === 0;
const filterOutOdd = collection => collection.filter(isEven);

const add = (x, y) => x + y;
const sum = collection => collection.reduce(add);

// base: const sumEven = collection => sum(filterOutOdd(collection));
// general compose: const composedFunction = inputObject => secondOperation(firstOperation(inputObject))

// for 2 fns: const compose = (fn1, fn2) => inputObject => fn1(fn2(inputObject));
// but here's general compose:
const compose = (...fns) => input =>
  fns.reduceRight((mem, fn) => fn(mem), input);

const sumEven = compose(sum, filterOutOdd)(collection);

sumEven([1, 2, 3, 4]);
