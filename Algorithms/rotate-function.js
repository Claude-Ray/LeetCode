/**
 * @param {number[]} nums
 * @return {number}
 */
var maxRotateFunction = function (nums) {
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    let result = 0;
    for (let j = 1; j < nums.length; j++) {
      result += j * nums[(j + nums.length - i) % nums.length];
    }
    max = Math.max(max, result);
  }
  return max;
};
