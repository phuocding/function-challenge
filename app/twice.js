/* Write a function twice that takes 
a binary function and returns a unary 
function that passes its argument to 
the binary function twice */
const { add, mul, sub } = require('../app/binaryfunc');

const twice = (f) => {
  return (a) => {
    return f(a, a);
  }
};

// console.log(add(11, 11)); // 22
 var doubl = twice(add);
// doubl(11); // 22
 var square = twice(mul);
// console.log(square(11)); // 121

/* Write reverse, a function that 
reverses the arguments of a binary function */
const reverse = (f) => {
  return (a, b) => {
    return f(b, a);
  }
};

/* 2.10 Write a function composeu that takes 
two unary functions and returns a unary 
function that calls them both */

const composeu = (f1, f2) => {
  return (a) => {
    return f2(f1(a));
  }
};

// console.log(composeu(doubl, square)(5)); // 100
// doubl(5) => 5 + 5 = 10
// square(10) => 100

/* 2.11 Write a function composeb that takes 
two binary functions and returns a function 
that calls them both */
const composeb = (f1, f2) => {
  return (a, b, c) => {
    return f2(f1(a, b), c);
  }
};

// console.log(composeb(add, mul)(2, 3, 7)); // 35
// add(2, 3) => 5
// mul(5, 7) => 35

module.exports = { twice, reverse, composeu, composeb };