/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let red = 0;
  let white = 0;
  for (const num of nums) {
    if (num === 0) red++;
    else if (num === 1) white++;
  }
  for (let i = 0; i < nums.length; i++) {
    if (i < red) {
      nums[i] = 0;
    } else if (i < red + white) {
      nums[i] = 1;
    } else {
      nums[i] = 2;
    }
  }
};