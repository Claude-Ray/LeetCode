/**
 * @param {number[]} rods
 * @return {number}
 */
var tallestBillboard = function (rods) {
  // diff map
  const dp = { 0: 0 };
  for (const rod of rods) {
    const temp = { ...dp };
    for (let height in temp) {
      height = +height;
      dp[height + rod] = Math.max(dp[height + rod] || 0, temp[height]);
      dp[Math.abs(height - rod)] = Math.max(
        dp[Math.abs(height - rod)] || 0,
        temp[height] + Math.min(height, rod)
      );
    }
  }
  return dp[0];
};
