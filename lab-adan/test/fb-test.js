'use strict';

let expect = require('expect');
let fp = require('../lib/fp.js');

describe('testing map', () => {
  it('it should return [2,4,6]', () => {
    expect(fp.map([1,2,3], n => n * 2)).toEqual([2,4,6]);
  })
  it('should return null', () => {
      expect(fp.map('hhh')).toEqual(null);
  });
});
describe('filter', () => {
  it('should return [1,3]', () => {
    expect(fp.filter([1,2,3,4], n => n % 2 === 1)).toEqual([1,3]);
  });
  it('should throw an error', () => {
    expect(() => fp.filter(2, n => n * 2)).toThrow(Error, 'error');
  });
});

describe('reduce', () => {
  it('should return 10', () => {
    expect(fp.reduce([1,2,3,4], (a,c) => a + c, 10)).toEqual(20);
  });
  it('should return null', () => {
    expect(() => fp.reduce(2, (a,c) => a + c, 2)).toEqual(null);
  });
});

describe('concat', () => {
  it('should return [1,2,3,4,\'a\',\'b\',[2,4],0,1]', () => {
    expect(fp.concat([1,2,3,4], ['a','b',[2, 4]], [0,1])).toEqual([1,2,3,4,'a','b',[2,4],0,1]);
  });
  it('should return null', () => {
    expect(() => fp.concat(2, (a,c) => a + c)).toEqual(null);
  });
});

describe('splice', () => {
  it('should return [3]', () => {
    expect(fp.splice([1,2,3,4], 2, 1)).toEqual([3]);
  });
  it('should return null', () => {
    expect(() => fp.splice(2, (a,c) => a + c)).toEqual(null);
  });
});
