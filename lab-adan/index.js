'use strict';
const fp = require('./lib/fb.js');
const fp = require('./test/fb-test.js')

let fp = require('./lib/fp.js');

let toUpper = module.exports = (test) => {
  let list = test || fp.splice(process.argv, 2);
  list = fp.map(list, word => word.toUpperCase());
  return list.join(' ');
};

toUpper();
