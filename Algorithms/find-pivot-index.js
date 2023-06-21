/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const len = nums.length;
  if (len === 1) return 0;
  let rightSum = nums.reduce((sum, n) => sum + n, 0);
  let leftSum = 0;
  for (let i = 0; i < len; i++) {
    rightSum -= nums[i];
    if (leftSum === rightSum) return i;
    leftSum += nums[i];
  }
  return -1;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex2 = function (nums) {
  const len = nums.length;
  if (len === 1) return 0;
  const leftSums = [0];
  for (let i = 0; i < len; i++) leftSums[i + 1] = leftSums[i] + nums[i];
  const total = leftSums[len];
  for (let i = 0; i < len; i++)
    if (total === 2 * leftSums[i] + nums[i]) return i;
  return -1;
};
