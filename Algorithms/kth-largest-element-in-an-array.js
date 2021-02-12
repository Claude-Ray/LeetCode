/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const sorted = nums.sort((a, b) => b - a);
  return sorted[k - 1] === undefined ? -1 : sorted[k - 1];
};
