/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfBeauties = function (nums) {
  let sum = 0;
  const leftMax = [];
  const rightMin = [];
  max = Number.MIN_SAFE_INTEGER;
  min = Number.MAX_SAFE_INTEGER;
  for (let i = 1; i < nums.length - 1; i++) {
    leftMax[i] = max = Math.max(max, nums[i - 1]);
    rightMin[nums.length - i - 1] = min = Math.min(min, nums[nums.length - i]);
  }
  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i] === nums[i - 1] || nums[i] === nums[i + 1]) continue;
    let beauty = 0;
    if (leftMax[i] < nums[i] && nums[i] < rightMin[i]) {
      beauty = 2;
    } else if (nums[i - 1] < nums[i] && nums[i] < nums[i + 1]) {
      beauty = 1;
    }
    sum += beauty;
  }
  return sum;
};
