const { add, sub, mul, addf, liftf, curry } = require('../app/binaryfunc');

describe('Function Challenge 1', () => {
  describe('add', () => {
    it('add(3, 4) should return 7', () => {
      expect(add(3, 4)).toBe(7);
    });
  });

  describe('add', () => {
    it('add(true, 4) should return 5', () => {
      expect(add(true, 4)).toBe(5);
    });
  });

  describe('sub', () => {
    it('sub(5, 1) should return 4', () => {
      expect(sub(5, 1)).toBe(4);
    });
  });

  describe('sub', () => {
    it('sub(true, 4) should return -3', () => {
      expect(sub(true, 4)).toBe(-3);
    });
  });

  describe('mul', () => {
    it('mul(3, 4) should return 12', () => {
      expect(mul(3, 4)).toBe(12);
    });
  });

  describe('mul', () => {
    it('mul(true, 4) should return 4', () => {
      expect(mul(true, 4)).toBe(4);
    });
  });
})

describe('Function Challenge 2', () => {
  describe('addf', () => {
    it('addf(3)(4) should return 7', () => {
      expect(addf(3)(4)).toBe(7);
    });
  });

  describe('addf', () => {
    it('addf(hello)(summer) should return hellosummer', () => {
      expect(addf('hello')('summer')).toBe('hellosummer');
    });
  });
})

describe('Function Challenge 3', () => {
  describe('liftf', () => {
    it('liftf(mul)(5)(6) should return 30', () => {
      expect(liftf(mul)(5)(6)).toBe(30);
    });
  });

  describe('liftf', () => {
    it('liftf(add)(5)(6) should return 11', () => {
      expect(liftf(add)(5)(6)).toBe(11);
    });
  });

  describe('liftf', () => {
    it('liftf(add)(5)(6) should return -1', () => {
      expect(liftf(sub)(5)(6)).toBe(-1);
    });
  });

  describe('liftf', () => {
    const addf = liftf(add);
    it('addf(2)(4) should return 6', () => {
      expect(addf(2)(4)).toBe(6);
    });
  });
})

describe('Function Challenge 4', () => {
  describe('curry', () => {
    it('curry(mul, 5)(6) should return 30', () => {
      expect(curry(mul, 5)(6)).toBe(30);
    });
  });
})