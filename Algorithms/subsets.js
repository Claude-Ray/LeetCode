/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  return nums.reduce((pre, cur) => pre.concat(pre.map(arr => arr.concat(cur))), [[]]);
};