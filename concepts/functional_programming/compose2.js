//  A form of function composition

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

console.log(
  add(2, mult(3, 5)) // 2 + 3 * 5
);

const users = [
  { name: 'Joe', age: 20 },
  { name: 'Lola', age: 25 },
  { name: 'Peter', age: 39 }
];

const filter = (cb, arr) => arr.filter(cb);
const map = (cb, arr) => arr.map(cb);

console.log(
  map(
    u => u.name,
    filter(u => u.age >= 28, users)
  )
);

// automating the function composition
//  fns = functions

const compose = (...fns) => args => fns.reduceRight((arg, fn) => fn(arg));

// 1) compose is a high order function.
// It is a function that returns another function.
// 2)compose takes multiple functions as arguments and
//  we convert them into an array of functions
//  using the spread opeartor: ...
// 3)Then we simply apply a reduceRight on those functions.
//  The first parameter of the callback is the current argument.
//  The second argument is the current function.
//  Then we call each function with the current argument
//  and the result is use for the next call.

const filter = cb => arr => arr.reduce(cb);
const map = cb => arr => arr.map(cb);

// ...fns = [map, filter]; args = users;

compose(
  map(u => u.name),
  filter(u => u.age >= 28)
)(users);
