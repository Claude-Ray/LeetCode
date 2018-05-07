/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const indexMap = {}
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (indexMap[diff] !== undefined)
      return [i, indexMap[diff]];
    indexMap[nums[i]] = i;
  }
};