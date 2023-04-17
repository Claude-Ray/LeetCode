/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let curr = nums[0];
  let max = curr;
  for (let i = 1; i < nums.length; i++) {
    curr = Math.max(nums[i] + curr, nums[i]);
    max = Math.max(curr, max);
  }
  return max;
};
