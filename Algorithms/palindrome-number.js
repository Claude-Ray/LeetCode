/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let num = x;
  let y = 0;
  while (num > 0) {
    y = y * 10 + num % 10;
    num = ~~(num / 10);
  }
  return num === 0 && y === x;
};