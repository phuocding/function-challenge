const identify = require('../app/identify');

describe('Function Challenge', () => {
  describe('identify', () => {
    it('function identify(3) should return a number with value 3', () => {
      expect(typeof identify(3)).toBe('number');
      expect(identify(3)).toBe(3);
    });
  });

  describe('identify', () => {
    it('function identify(Hello) should return Hello', () => {
      expect(identify('Hello')).toBe('Hello');
    });
  });

  describe('identify', () => {
    it('identify([1, 2, 3]) should return an array [1, 2, 3]', () => {
      expect(JSON.stringify(identify([1, 2, 3]))).toBe(JSON.stringify([1, 2, 3]));
    });
  });

  describe('identify', () => {
    it('identify(undefined) should return undefined', () => {
      expect(identify(undefined)).toBe(undefined);
    });
  });

  describe('identify', () => {
    it('identify(true) should return true', () => {
      expect(identify(true)).toBe(true);
    });
  });
})