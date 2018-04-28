const { twice, reverse,doubl, square, composeu, composeb, limit } = require('../app/twice');
const { add, mul, sub } = require('../app/binaryfunc');

describe('Function Challenge 1', () => {
  describe('twice', () => {
    let doubl = twice(add);
    it('doubl(11) should return 22', () => {
      expect(doubl(11)).toBe(22);
    });
  })

  describe('twice', () => {
    let square = twice(mul);
    it('square(11) should return 121', () => {
      expect(square(11)).toBe(121);
    });
  })
})

describe('Function Challenge 2', () => {
  describe('reverse', () => {
    let bus = reverse(sub);
    it('bus(3,2) should return -1', () => {
      expect(bus(3, 2)).toBe(-1);
    });
  })

  describe('reverse', () => {
    let bus = reverse(sub);
    it('bus(16, 1) should return -15', () => {
      expect(bus(16, 1)).toBe(-15);
    });
  })
})

describe('Function Challenge 3', () => {
  describe('composeu', () => {
    it('composeu(doubl, square)(5) should return 100', () => {
      expect(composeu(doubl, square)(5)).toBe(100);
    });
  })
})

describe('Function Challenge 4', () => {
  describe('composeb', () => {
    it('composeb(add, mul)(2, 3, 7) should return 35', () => {
      expect(composeb(add, mul)(2, 3, 7)).toBe(35);
    });
  })
})

describe('Function Challenge 5', () => {
  describe('limit', () => {
    addLimited = limit(add, 2)
    it('addLimited(3, 4) should return 7', () => {
      expect(addLimited(3, 4)).toBe(7);
    })
    it('addLimited(3, 5) should return undefined', () => {
      expect(addLimited(3, 4)).toBe(undefined);
    })
    it('addLimited(4, 5) should return undefined', () => {
      expect(addLimited(3, 4)).toBe(undefined);
    })
  })
})