/* Write a fromTo function that return 
a generator that produce values in a range*/

const fromTo = (x, y) => {
   function* func() {
    while (x < y) {
      yield x++;
    }
  }
  let gen = func();

  return () => {
    return gen.next().value;
  }
};

module.exports = fromTo;

// var index = fromTo(0, 3); // index() = func().next().value
// console.log(index()); // 0
// console.log(index());
// console.log(index());
// console.log(index());
