/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const dp = Array(text2.length + 1).fill(0);
  for (let i = 1; i <= text1.length; i++) {
    let prev = 0;
    for (let j = 1; j <= text2.length; j++) {
      const temp = dp[j];
      if (text1[i - 1] === text2[j - 1]) {
        dp[j] = prev + 1;
      } else {
        dp[j] = Math.max(dp[j], dp[j - 1]);
      }
      prev = temp;
    }
  }
  return dp[text2.length];
};

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence2 = function (text1, text2) {
  const dp = Array.from({ length: text1.length + 1 }).map(() =>
    Array(text2.length + 1).fill(0)
  );
  for (let i = 1; i <= text1.length; i++)
    for (let j = 1; j <= text2.length; j++)
      dp[i][j] =
        text1[i - 1] === text2[j - 1]
          ? dp[i - 1][j - 1] + 1
          : Math.max(dp[i][j - 1], dp[i - 1][j]);
  return dp[text1.length][text2.length];
};
