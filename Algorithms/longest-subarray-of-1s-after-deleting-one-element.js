/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  let first = -1;
  let second = -1;
  let len = 0;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) len++;
    else if (second === -1) second = i;
    else {
      max = Math.max(max, len);
      len -= second - first - 1;
      first = second;
      second = i;
    }
  }
  max = Math.max(max, len);
  return max === nums.length ? max - 1 : max;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray2 = function (nums) {
  let max = 0;
  let left = -1;
  let right = -1;
  for (let i = 0; i < nums.length; i++) {
    while (nums[i]) i++;
    if (right < 0) right = i;
    else {
      max = Math.max(max, i - left - 2);
      left = right;
      right = i;
    }
  }
  max = Math.max(max, nums.length - left - 2);
  return max;
};
