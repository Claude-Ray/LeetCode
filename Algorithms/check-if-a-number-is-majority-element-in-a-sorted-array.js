/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var isMajorityElement = function (nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++)
    map[nums[i]] = map[nums[i]] ? map[nums[i]] + 1 : 1;
  return map[target] ? map[target] > nums.length / 2 : false;
};
