'use strict';

const fp = module.exports = {};

fp.map = (list, callback) => {
  if(typeof list === [])
    return Array.prototype.map.call(list, callback);
};



//
//
// function map(list, callback){
//   return Array.prototype.map.call(list, callback);
// }
//
// function reduce(list, args){
//   return Array.prototype.reduce.apply(list, args)
// }
