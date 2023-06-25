/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let len = 0;
  let max = 0;
  const zeros = [-1];
  for (let i = 0; i < nums.length; i++) {
    len++;
    if (nums[i] === 0) {
      if (zeros.length - 1 === k) {
        max = Math.max(max, len - 1);
        const index = zeros.shift();
        len -= zeros.length ? zeros[0] - index : len;
      }
      zeros.push(i);
    }
  }
  return Math.max(max, len);
};
