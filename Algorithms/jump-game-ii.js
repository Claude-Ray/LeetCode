/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let max = 0;
  let step = 0;
  let maxIndex = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    max = Math.max(max, i + nums[i]);
    if (i === maxIndex) {
      step++;
      maxIndex = max;
    }
  }
  return step;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump2 = function (nums) {
  const dp = [0];
  for (let i = 0; i < nums.length; i++)
    for (let j = i + 1; j <= nums[i] + i && j < nums.length; j++)
      dp[j] = dp[j] ? Math.min(dp[j], dp[i] + 1) : dp[i] + 1;
  return dp[nums.length - 1];
};
