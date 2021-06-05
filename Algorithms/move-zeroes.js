/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let count = 0;
  for (let i = 0; nums[i] !== undefined; i++) {
    if (nums[i] === 0) {
      nums.splice(i--, 1);
      count++;
    }
  }
  for (let i = 0; i < count; i++) nums.push(0);
  return nums;
};
