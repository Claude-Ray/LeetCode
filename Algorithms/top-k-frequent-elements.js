/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = {};
  nums.forEach(n => (map[n] = map[n] ? ++map[n] : 1));
  return Object.entries(map)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(entry => +entry[0]);
};
