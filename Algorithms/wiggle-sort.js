/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
  let flag = true;
  for (let i = 1; i < nums.length; i++) {
    if ((flag && nums[i] < nums[i - 1]) || (!flag && nums[i] > nums[i - 1])) {
      const t = nums[i];
      nums[i] = nums[i - 1];
      nums[i - 1] = t;
    }
    flag = !flag;
  }
};

var wiggleSort2 = function (nums) {
  nums.sort((a, b) => a - b);
  for (let i = 2; i < nums.length; i = i + 2)
    [nums[i], nums[i - 1]] = [nums[i - 1], nums[i]];
};
