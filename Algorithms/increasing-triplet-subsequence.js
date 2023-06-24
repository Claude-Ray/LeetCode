/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  let first = nums[0];
  let second = Infinity;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < first) first = nums[i];
    else if (nums[i] < second && nums[i] > first) second = nums[i];
    else if (nums[i] > first && nums[i] > second) return true;
  }
  return false;
};
