/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  const index = nums.findIndex(n => n === target || n > target);
  return index < 0 ? nums.length : index;
};
