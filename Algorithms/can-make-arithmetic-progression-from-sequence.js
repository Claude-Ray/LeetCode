/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
  arr.sort((a, b) => a - b);
  const diff = arr[1] - arr[0];
  return arr.slice(1).every((n, i) => n - arr[i] === diff);
};
