/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
  let minLen = Infinity;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i, len = 0, sum = 0; j < nums.length; j++) {
      sum += nums[j];
      len++;

      if (sum >= s) {
        minLen = Math.min(minLen, len);
        break;
      }
    }
  }
  return Number.isFinite(minLen) ? minLen : 0;
};