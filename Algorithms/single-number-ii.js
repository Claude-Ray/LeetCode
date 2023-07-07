/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let ones = 0;
  let twos = 0;
  for (const n of nums) {
    ones = (ones ^ n) & ~twos;
    twos = (twos ^ n) & ~ones;
  }
  return ones;
};
