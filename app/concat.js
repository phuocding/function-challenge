/*  Write a concat function that takes 2 generator and 
produces a generator that combines the sequences */

const concat = (f1, f2) => {
  return function () {
    var value = f1()
    if (value === undefined) {
      return f2()
    }
    return value
  }
}

module.exports = concat;

// var con = concat(fromTo(0, 3), fromTo(0, 2)); // con() = func()
// console.log(con()); // 0
// console.log(con()); // 1
// console.log(con()); // 2
// console.log(con()); // 0
// console.log(con()); // 1
// console.log(con()); // undefined
