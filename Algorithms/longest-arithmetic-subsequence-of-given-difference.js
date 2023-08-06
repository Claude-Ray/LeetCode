/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function (arr, difference) {
  const dp = {};
  let max = 0;
  for (const n of arr) {
    dp[n] = dp[n - difference] ? dp[n - difference] + 1 : 1;
    max = Math.max(max, dp[n]);
  }
  return max;
};
