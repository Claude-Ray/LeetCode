/**
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 * @return {number}
 */
var maxValue = function (n, index, maxSum) {
  let l = index;
  let r = index;
  let max = 1;
  let sum = n;
  while (sum <= maxSum) {
    if (l === 0 && r === n - 1) {
      return max + Math.floor((maxSum - sum) / n);
    }
    sum += r - l + 1;
    max++;
    if (l > 0) l--;
    if (r < n - 1) r++;
  }
  return max - 1;
};
