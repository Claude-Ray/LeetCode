/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingElement = function (nums, k) {
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    const mid = Math.ceil((l + r) / 2);
    if (nums[mid] - nums[0] - mid < k) l = mid;
    else r = mid - 1;
  }
  // nums[l] + (k - (nums[l] - nums[0] - l))
  return nums[0] + l + k;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingElement2 = function (nums, k) {
  for (let i = 1; i < nums.length; i++) {
    k -= nums[i] - nums[i - 1] - 1;
    if (k <= 0) return nums[i] + k - 1;
  }
  return nums[nums.length - 1] + k;
};
