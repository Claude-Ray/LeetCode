/**
 * @param {number[]} prob
 * @param {number} target
 * @return {number}
 */
var probabilityOfHeads = function (prob, target) {
  const coinsProbMap = [[1]];
  for (let i = 0; i < prob.length; i++) {
    const cur = [0];
    const pre = coinsProbMap[0];
    for (let j = 0; j < pre.length; j++) {
      cur[j] += pre[j] * (1 - prob[i]);
      cur[j + 1] = pre[j] * prob[i] + (cur[j + 1] || 0);
    }
    coinsProbMap.unshift(cur);
  }
  return coinsProbMap[0][target];
};
