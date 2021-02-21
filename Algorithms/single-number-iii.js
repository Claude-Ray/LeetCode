/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) delete map[nums[i]];
    else map[nums[i]] = 1;
  }
  return Object.keys(map);
};
