/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function (nums) {
  // {} is faster than []
  const visitedIndex = {};
  let maxLen = 0;
  for (let i = 0; i < nums.length; i++) {
    if (visitedIndex[i]) continue;
    const S = {};
    let index = i;
    do {
      visitedIndex[index] = 1;
      S[index] = 1;
      index = nums[index];
    } while (!S[index]);
    maxLen = Math.max(Object.keys(S).length, maxLen);
  }
  return maxLen;
};