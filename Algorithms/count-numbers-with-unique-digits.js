/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function (n) {
  if (n === 0) return 1;
  let result = 10;
  let current = 9;
  let left = 9;
  for (let i = 1; i < n; i++) {
    current *= left--;
    result += current;
  }
  return result;
};
