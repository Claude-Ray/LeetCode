/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let sum = 0;
  let max = nums.length;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    max += i;
  }
  return max - sum;
};
