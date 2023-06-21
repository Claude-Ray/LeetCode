/**
 * @param {number[]} nums
 * @param {number[]} cost
 * @return {number}
 */
var minCost = function (nums, cost) {
  const min = Math.min(...nums);
  const max = Math.max(...nums);

  const map = {};
  function countCost(n) {
    if (map[n]) return map[n];
    let sum = 0;
    for (let i = 0; i < nums.length; i++)
      sum += Math.abs(nums[i] - n) * cost[i];
    return (map[n] = sum);
  }

  let left = min;
  let right = max;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (countCost(mid) < countCost(mid + 1)) right = mid;
    else left = mid + 1;
  }
  return map[left] || 0;
};
