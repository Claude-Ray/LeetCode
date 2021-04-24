/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
  let min = Number.MAX_VALUE;
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    if (min > nums[i]) min = nums[i];
    result += nums[i];
  }
  return result - nums.length * min;
};
