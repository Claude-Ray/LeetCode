/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  if (x > Math.pow(2, 31) - 1 || x < Math.pow(-2, 31)) return 0;
  const y = Math.sign(x) * +Math.abs(x).toString().split('').reverse().join('');
  if (y > Math.pow(2, 31) - 1 || y < Math.pow(-2, 31)) return 0;
  return y;
};