/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  const dp = [0, 1, 1];
  for (let i = 0; i < n - 2; i++) {
    dp[i + 3] = dp[i] + dp[i + 1] + dp[i + 2];
  }
  return dp[n];
};
