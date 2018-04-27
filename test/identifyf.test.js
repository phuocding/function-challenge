const identifyf = require('../app/identifyf');

describe('function challenge', () => {
  // describes a module with nested "describe" functions
  describe('identifyf with param equal 3', () => {
    // specify the expected behavior
    let four = identifyf(3);
    
    it('should be return 4', () => {
      expect(four()).toBe(4);
    })
  })

  describe('identifyf with param equal undefined', () => {
    // specify the expected behavior
    let four = identifyf(undefined);

    it('should be return NaN', () => {
      expect(four()).toBe(NaN);
    })
  })

  describe('identifyf with param equal "string"', () => {
    // specify the expected behavior
    let four = identifyf('string');

    it('should be return "string1"', () => {
      expect(four()).toBe('string1');
    })
  })

  describe('identifyf with param equal true', () => {
    // specify the expected behavior
    let four = identifyf(true);

    it('should be return 2', () => {
      expect(four()).toBe(2);
    })
  })

  describe('identifyf with param equal null', () => {
    // specify the expected behavior
    let four = identifyf(null);

    it('should be return 1', () => {
      expect(four()).toBe(1);
    })
  })
})