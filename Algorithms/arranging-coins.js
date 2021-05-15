/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  n = n * 2;
  let root = Math.ceil(Math.sqrt(n));
  while (root * (root - 1) > n) root--;
  return root - 1;
};
