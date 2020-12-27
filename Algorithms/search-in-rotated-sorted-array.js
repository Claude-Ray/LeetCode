/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let i = 0;
  while (++i < nums.length) {
    if (nums[i - 1] > nums[i]) {
      nums = nums.slice(i).concat(nums.slice(0, i));
      break;
    }
  }
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    const mid = Math.floor((end + start) / 2);
    if (nums[mid] < target) start = mid + 1;
    else if (nums[mid] > target) end = mid - 1;
    else return (mid + i) % nums.length;
  }
  return -1;
};
