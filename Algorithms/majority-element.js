/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const map = {};
  for (const n of nums) map[n] = map[n] ? ++map[n] : 1;
  let max = 0;
  let result;
  for (const n in map) {
    if (map[n] > max) {
      max = map[n];
      result = n;
    }
  }
  return result;
};
