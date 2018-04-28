/* 2.13 Write a from function that produces
a generator that will produce a series of values */

const from = (a) => {
  return () => {
    let b = a;
    a++;
    return b;
  }
};

// var index = from(0);
// console.log(index()); // 0
// console.log(index()); // 1
// console.log(index()); // 2

/* 2.14 Write a to function that takes a generator 
and an end value, and returns another generator 
that will produce numbers up to that limit */

const to = (func, a) => {
  return () => {
    let b = func();
    if (b < a) {
      return b;
    }
    return undefined;
  };
};

// var index = to(from(1), 3);
// console.log(index()); // 1
// console.log(index()); // 2
// console.log(index()); // undefined
// console.log(index()); // undefined

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

module.exports = { from, fromTo };

// var index = fromTo(0, 3); // index() = func().next().value
// console.log(index()); // 0
// console.log(index());
// console.log(index());
// console.log(index());
