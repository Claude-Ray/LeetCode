/**
 * @param {number[]} weights
 * @param {number} k
 * @return {number}
 */
var putMarbles = function (weights, k) {
  if (weights.length === k || k === 1) return 0;
  const diff = Array.from({ length: weights.length - 1 })
    .map((_, i) => weights[i + 1] + weights[i])
    .sort((a, b) => a - b);
  let min = 0;
  let max = 0;
  for (let i = 0; i < k - 1; i++) {
    min += diff[i];
    max += diff[diff.length - i - 1];
  }
  return max - min;
};
