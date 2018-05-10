/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  return Math.min(Math.pow(2, 31) - 1, Math.max(Math.pow(-2, 31), parseInt(str))) || 0;
};