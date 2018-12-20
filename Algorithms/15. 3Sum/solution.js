/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const sums = [];
  if (!nums || nums.length < 3) return sums;
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break;
    if (nums[i] === nums[i - 1]) continue;
    let k = nums.length - 1;
    let j = i + 1;
    while (j < k) {
      if (nums[i] + nums[j] + nums[k] > 0) {
        k--;
      } else if (nums[i] + nums[j] + nums[k] < 0) {
        j++;
      } else {
        sums.push([nums[i], nums[j], nums[k]]);
        do { j++; } while (j < k && nums[j - 1] === nums[j]);
        do { k--; } while (j < k && nums[k + 1] === nums[k]);
      }
    }
  }
  return sums;
};
