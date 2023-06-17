/**
 * @param {number[]} nums
 * @return {number}
 */
var largestUniqueNumber = function (nums) {
  const countMap = {};
  for (const n of nums) countMap[n] = countMap[n] ? countMap[n] + 1 : 1;
  const uniqueNums = Object.keys(countMap).filter(n => countMap[n] === 1);
  return uniqueNums.length ? Math.max(...uniqueNums) : -1;
};
