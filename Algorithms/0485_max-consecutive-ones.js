/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let max = 0;
  let length = 0;
  for (const n of nums) {
    if (n === 1) {
      length++;
    } else {
      max = Math.max(max, length);
      length = 0;
    }
  }
  return Math.max(max, length);
};
