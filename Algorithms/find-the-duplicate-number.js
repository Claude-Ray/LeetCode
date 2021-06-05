/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) return nums[i];
    map[nums[i]] = 1;
  }
  return -1;
};
