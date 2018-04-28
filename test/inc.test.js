const { add, sub, mul, addf, liftf, curry } = require('../app/binaryfunc');

describe('Function Challenge 1', () => {
  describe('add', () => {
    const inc = addf(1); // TODO;
    it('inc(5) should return 6', () => {
      expect(inc(5)).toBe(6);
      expect(inc(inc(5))).toBe(7);
    });
  });

  describe('add', () => {
    const inc = curry(add, 1);
    it('inc(5) should return 6', () => {
      expect(inc(5)).toBe(6);
      expect(inc(inc(5))).toBe(7);
    });
  });

  describe('add', () => {
    const inc = liftf(add)(1);
    it('inc(5) should return 6', () => {
      expect(inc(5)).toBe(6);
      expect(inc(inc(5))).toBe(7);
    });
  });
})