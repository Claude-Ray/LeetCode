/**
 * @param {any} obj
 * @param {any} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function (obj, classFunction) {
  if (!(classFunction && classFunction.prototype)) return false;
  while (obj != null) {
    if (obj.constructor === classFunction) return true;
    obj = obj.__proto__;
  }
  return false;
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */
