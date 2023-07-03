/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right && nums[left] > nums[right]) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] < nums[right]) {
      right = mid;
      if (nums[mid] < nums[left]) left++;
    } else {
      left = mid + 1;
    }
  }
  return nums[left];
};
