/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  return [indexOf(nums, target), lastIndexOf(nums, target)];
};

function indexOf(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let index = -1;
  while (start <= end) {
    const i = ~~((end - start) / 2 + start);
    if (nums[i] === target)
      index = i;
    if (nums[i] >= target)
      end = i - 1;
    else
      start = i + 1;
  }
  return index;
}

function lastIndexOf(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let index = -1;
  while (start <= end) {
    const i = ~~((end - start) / 2 + start);
    if (nums[i] === target)
      index = i;
    if (nums[i] <= target)
      start = i + 1;
    else
      end = i - 1;
  }
  return index;
}