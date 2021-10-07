/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function (nums) {
  let maxDiff = -1;
  let min = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > min) maxDiff = Math.max(nums[i] - min, maxDiff);
    else if (nums[i] < min) min = nums[i];
  }
  return maxDiff;
};
