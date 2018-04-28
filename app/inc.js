/* Without writing any new functions, 
show 3 ways to create the inc function */
const { add, sub, mul, addf, liftf, curry } = require('../app/binaryfunc');

// 1st way
const inc = addf(1); // TODO;
// 2nd way
const inc = curry(add, 1);
// 3rd way
const inc = liftf(add)(1);

// console.log(inc(5)); // 6
// console.log(inc(inc(5))); // 7

module.exports = inc;