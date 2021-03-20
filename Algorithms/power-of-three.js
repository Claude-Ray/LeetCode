/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  while (n && n % 3 === 0) n /= 3;
  return n === 1;
};

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree2 = function (n) {
  return n > 0 && 1162261467 % n === 0;
};
