'use strict';

let fp = module.exports = {};

fp.map = (list, callback) => {
  if (Array.isArray(list)){
    return Array.prototype.map.call(list, callback);
  } else {
    return null;
  }
};

fp.filter = (list, callback) => {
  if (typeof list === 'object'){
    return Array.prototype.filter.call(list, callback);
  throw new Error('wrong input');
  }
};

fp.reduce = (list, callback, startNum) => {
  if (typeof list === 'object'){
    return Array.prototype.reduce.call(list, callback, startNum);
  } else {
    return null;
  }
};

fp.concat = (list, ...itemToConcat) => {
  if (typeof list === 'object'){
    return Array.prototype.concat.apply(list, ...itemToConcat);
  } else {
    return null;
  }
};

fp.splice = (list, ...args) => {
  if (typeof list === 'object'){
    return Array.prototype.map.call(list, ...args);
  } else {
    return null;
  }
};
