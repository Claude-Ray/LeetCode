/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function (n) {
  let count = 0;
  while (n !== 1) {
    if (n % 2 === 0) {
      n /= 2;
    } else {
      n = (n > 3 && n & 3) === 3 ? n + 1 : n - 1;
    }
    count++;
  }
  return count;
};
