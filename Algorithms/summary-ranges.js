/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    let left = nums[i];
    let right = left;
    while (nums[i] + 1 === nums[i + 1]) right = nums[++i];
    result.push(left === right ? `${left}` : `${left}->${right}`);
  }
  return result;
};
