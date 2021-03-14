/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates = candidates.sort((a, b) => a - b);
  const result = [];
  sum(result, [], candidates, target);
  return result;
};

function sum(result, current, next, target) {
  for (let i = 0; i < next.length; i++) {
    if (next[i] > target) continue;
    const diff = target - next[i];
    if (diff === 0) {
      return result.push([...current, next[i]]);
    } else {
      sum(
        result,
        [...current, next[i]],
        next.slice(i + 1).filter(v => v <= diff),
        diff
      );
      while (next[i + 1] === next[i]) i++;
    }
  }
}
