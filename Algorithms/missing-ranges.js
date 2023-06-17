/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number[][]}
 */
var findMissingRanges = function (nums, lower, upper) {
  nums.sort((a, b) => a - b);
  const ranges = [];
  let p = lower;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > p) ranges.push([p, nums[i] - 1]);
    p = nums[i] + 1;
  }
  if (p <= upper) ranges.push([p, upper]);
  return ranges;
};
