/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function (arr) {
  const countMap = {};
  for (const n of arr) countMap[n] = countMap[n] ? countMap[n] + 1 : 1;
  let count = 0;
  for (const n in countMap) if (countMap[+n + 1]) count += countMap[n];
  return count;
};
