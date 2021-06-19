/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const result = [cost[0], cost[1]];
  for (let i = 2; i < cost.length; i++)
    result[i] = cost[i] + Math.min(result[i - 1], result[i - 2]);
  return Math.min(result[result.length - 1], result[result.length - 2]);
};
