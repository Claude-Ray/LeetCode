/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let res = max = min = nums[0]
  for (let i = 1; i < nums.length; i++) {
    const tmpMax = nums[i] * max;
    const tmpMin = nums[i] * min;
    max = Math.max(tmpMax, Math.max(tmpMin, nums[i]));
    min = Math.min(tmpMin, Math.min(tmpMax, nums[i]));
    res = Math.max(res, max);
  }
  return res;
};
