/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  return quickSort(nums, 0, nums.length - 1);
};

function quickSort(nums, l, r) {
  if (l >= r) return nums;
  const i = partition(nums, l, r);
  quickSort(nums, l, i - 1);
  quickSort(nums, i + 1, r);
  return nums;
}

function partition(nums, l, r) {
  let pivot = nums[l];
  let i = l + 1;
  let j = r;
  while (i <= j) {
    while (i <= j && nums[i] < pivot) i++;
    while (i <= j && nums[j] > pivot) j--;
    if (i <= j) swap(nums, i++, j--);
  }
  swap(nums, l, j);
  return j;
}

function swap(nums, i, j) {
  if (i === j) return;
  const tmp = nums[i];
  nums[i] = nums[j];
  nums[j] = tmp;
}
