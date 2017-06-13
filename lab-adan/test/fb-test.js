'use strict';

const expect = require('expect');
const fp = require('../lib/fp.js');

describe('testing map', () => {
  it('it should return [2,4,6]', () => {
    expect(fp.map([1,2,3], n => n * 2)).toEqual([2,4,6]);
  })
});
