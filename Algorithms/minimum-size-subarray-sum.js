/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let min = Infinity;
  let l = 0;
  let r = 0;
  let sum = 0;
  while (r < nums.length) {
    sum += nums[r++];
    while (l < r && sum - nums[l] >= target) sum -= nums[l++];
    if (sum >= target) min = Math.min(min, r - l);
  }
  return Number.isFinite(min) ? min : 0;
};

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen2 = function (s, nums) {
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
