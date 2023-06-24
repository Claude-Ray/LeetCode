/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let maxSum = Number.MIN_SAFE_INTEGER;
  let len = 0;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (len < k) len++;
    else sum -= nums[i - k];
    if (len === k) maxSum = Math.max(maxSum, sum);
  }
  return maxSum / k;
};
