/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function (nums, k) {
  if (!k) return nums;
  const len = k * 2 + 1;
  const averages = nums.map(() => -1);
  if (nums.length < len) return averages;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (i < len - 1) continue;
    if (i >= len) sum -= nums[i - len];
    averages[i - k] = Math.floor(sum / len);
  }
  return averages;
};
