/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
  let min = Infinity;
  for (let sum = 0, left = 0, right = 0; left < nums.length;) {
    if (sum < s && right < nums.length)
      sum += nums[right++];
    else
      sum -= nums[left++];

    if (sum >= s)
      min = Math.min(min, right - left);
  }
  return Number.isFinite(min) ? min : 0;
};