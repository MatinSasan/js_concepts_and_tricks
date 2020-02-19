// Currying is a process in functional programming
//  in which we can transform a function with multiple arguments
//  into a sequence of nesting functions. It returns a new function
//  that expects the next argument inline.

function multiply(a, b, c) {
  return a * b * c;
}

//  Curried version
function multiply(a) {
  return b => {
    return c => {
      return a * b * c;
    };
  };
}

// OR

const multiply = a => b => c => a * b * c;

// Example
const multiplyBy3 = multiply(3);
multiplyBy3(2)(1); // b = 2; c = 1;

// General Curry Function: takes any function and returns a curred version of it

function curry(fn, ...args) {
  return (..._arg) => {
    return fn(...args, ..._arg);
  };
}
