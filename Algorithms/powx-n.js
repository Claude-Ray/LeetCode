/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n === 0) return 1;
  const absN = Math.abs(n);
  const res = absN % 2 ? myPow(x, absN - 1) * x : myPow(x * x, absN / 2);
  return n < 0 ? 1 / res : res;
};

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow2 = function (x, n) {
  return Math.pow(x, n);
};
