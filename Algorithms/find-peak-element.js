/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  const len = nums.length;
  if (len === 1 || nums[0] > nums[1]) return 0;
  if (nums[len - 1] > nums[len - 2]) return len - 1;
  // An incremental segment's tail must be a peak element
  let left = 0;
  let right = len - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] < nums[mid + 1]) left = mid + 1;
    else right = mid;
  }
  return left;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement2 = function (nums) {
  const len = nums.length;
  if (len === 1 || nums[0] > nums[1]) return 0;
  if (nums[len - 1] > nums[len - 2]) return len - 1;
  for (let i = 0; i < len - 1; i++) {
    if (nums[i] >= nums[i + 1]) continue;
    if (nums[i + 2] === undefined || nums[i + 1] > nums[i + 2]) return i + 1;
  }
  return 0;
};
