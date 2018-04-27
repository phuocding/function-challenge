/* Write a function identifyf that takes an argument and 
returns a function that returns that argument */
const identifyf = (param) => {
  return () => param + 1;
};

// var four = identifyf(3); // four = () => {...}
// four(); // 4

module.exports = identifyf;