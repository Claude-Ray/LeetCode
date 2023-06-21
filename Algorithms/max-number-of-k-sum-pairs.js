/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  const map = {};
  let ops = 0;
  for (const n of nums) {
    if (map[k - n]) {
      map[k - n]--;
      ops++;
    } else {
      map[n] = map[n] ? map[n] + 1 : 1;
    }
  }
  return ops;
};
