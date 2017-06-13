'use strict';

const fp = module.exports = {};

fp.map = (list, callback) => {
  if (Array.isArray(list)){
    return Array.prototype.map.call(list, callback);
  } else {
    return null;
  }
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
