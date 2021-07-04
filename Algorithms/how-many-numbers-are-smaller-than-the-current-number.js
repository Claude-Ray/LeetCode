/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  const map = {};
  nums
    .concat()
    .sort((a, b) => a - b)
    .forEach((n, i) => map[n] === undefined && (map[n] = i));
  return nums.map(n => map[n]);
};
