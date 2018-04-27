const concat = require('../app/concat');
const fromTo = require('../app/fromTo');

describe('Function Challenge', () => {
  describe('Concat function, params are fromTo(0,3) and fromTo(0,2)', () => {

    let con = concat(fromTo(0, 3), fromTo(0, 2));
    
    it('First con() should be return 0', () => {
      expect(con()).toBe(0);
    })
    it('Second con() should be return 1', () => {
      expect(con()).toBe(1);
    })
    it('Third con() should be return 2', () => {
      expect(con()).toBe(2);
    })
    it('Fourth con() should be return 0', () => {
      expect(con()).toBe(0);
    })
    it('Fifth con() should be return 1', () => {
      expect(con()).toBe(1);
    })
    it('Sixth con() should be return undefined', () => {
      expect(con()).toBe(undefined);
    })
  })
})