/* Write 3 binary function: add, sub, and mul, 
that take 2 numbers and return their sum, 
difference, and product */

const add = (x, y) =>{
  return x + y;
}

const sub = (x, y) =>{
  return x - y;
}

const mul = (x, y) =>{
  return x * y;
}

/* Write a function addf that adds from 2 invocations*/

const addf = (x) => {
  return (y) => {
    return x + y;
  }
}

/* Write a function liftf that takes 
  a binary function, and makes it 
  callable with 2 invocations*/
const liftf = (func) => {
  return (a) => {
    return (b) => {
      return func(a, b);
    }
  }
};

/* Write a function curry that takes 
a binary function and an argument, 
and returns a function that can take 
a second arguments */
const curry = (func, b) => {
  return (a) => {
    return func(a, b);
  }
};

module.exports = { add, sub, mul, addf, liftf, curry };