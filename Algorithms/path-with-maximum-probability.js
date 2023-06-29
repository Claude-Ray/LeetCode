/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
var maxProbability = function (n, edges, succProb, start, end) {
  const map = {};
  for (let i = 0; i < n; i++) map[i] = {};
  edges.forEach(([a, b], i) => {
    map[a][b] = map[b][a] = succProb[i];
  });
  const prob = { [start]: 1 };
  let queue = [start];
  while (queue.length) {
    let nextQueue = [];
    for (const cur of queue) {
      if (!map[cur]) continue;
      for (const next in map[cur]) {
        const p = map[cur][next] * prob[cur];
        if (p > (prob[next] || 0)) {
          prob[next] = p;
          nextQueue.push(next);
        }
      }
    }
    queue = nextQueue;
  }
  return prob[end] || 0;
};
