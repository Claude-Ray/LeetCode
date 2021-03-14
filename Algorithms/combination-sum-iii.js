/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const nums = Array.from({ length: 9 }).map((_, i) => i + 1);
  const result = [];
  sum(result, [], nums, n, k);
  return result.filter(arr => arr.length === k);
};

function sum(result, current, next, target, deep) {
  for (let i = 0; i < next.length; i++) {
    if (next[i] > target) continue;
    if (next[i] === target) {
      if (current.length === deep - 1) result.push([...current, next[i]]);
      return;
    }
    sum(
      result,
      [...current, next[i]],
      next.slice(i + 1),
      target - next[i],
      deep
    );
  }
}
