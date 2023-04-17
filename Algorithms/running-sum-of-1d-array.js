/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  return nums.reduce((res, cur, i) => [...res, nums[i] + (res[i - 1] || 0)], []);
};
