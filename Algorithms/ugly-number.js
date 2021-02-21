/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function (num) {
  if (num <= 0) return false;
  [2, 3, 5].forEach(n => {
    while (num % n === 0) num /= n;
  });
  return num === 1;
};
