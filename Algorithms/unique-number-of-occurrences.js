/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const map = {};
  for (const n of arr) map[n] = map[n] ? ++map[n] : 1;
  return new Set(Object.values(map)).size === Object.keys(map).length;
};
