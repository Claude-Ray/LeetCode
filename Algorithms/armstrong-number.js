/**
 * @param {number} n
 * @return {boolean}
 */
var isArmstrong = function (n) {
  const str = n.toString;
  return str.split('').reduce((sum, num) => sum + num ** str.length, 0) === n;
};
