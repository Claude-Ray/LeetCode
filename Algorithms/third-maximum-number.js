/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  const set = new Set(nums);
  const arr = [...set].sort((a, b) => b - a);
  return arr.length < 3 ? arr[0] : arr[2];
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax2 = function (nums) {
  const arr = nums
    .filter((n, i) => nums.indexOf(n) === i)
    .sort((a, b) => b - a);
  return arr.length < 3 ? arr[0] : arr[2];
};
