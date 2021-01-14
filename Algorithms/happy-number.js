/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  while (n >= 10) {
    const arr = [];
    while (n) {
      arr.push(n % 10);
      n = Math.floor(n / 10);
    }
    n = arr.map(num => num * num).reduce((sum, num) => sum + num, 0);
  }
  return n === 1 || n === 7;
};
