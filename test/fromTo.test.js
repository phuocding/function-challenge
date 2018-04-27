const fromTo = require('../app/fromTo');

describe('Function Challenge', () => {
  describe('fromTo function, params are 0 and 3', () => {
    index = fromTo(0, 3);

    it('First executed should be return 0', () => {
      expect(index()).toBe(0);
    })

    it('First executed should be return 1', () => {
      expect(index()).toBe(1);
    })

    it('First executed should be return 2', () => {
      expect(index()).toBe(2);
    })

    it('First executed should be return undefined', () => {
      expect(index()).toBe(undefined);
    })
  })
})