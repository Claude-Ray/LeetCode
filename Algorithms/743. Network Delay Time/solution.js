/**
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var networkDelayTime = function(times, N, K) {
  const maps = Array.from({ length: N }).map(() => ({}));
  for (const [u, v, w] of times) {
    maps[u - 1][v - 1] = w;
  }

  const start = K - 1;
  const dist = [];
  const visited = [];
  for (let i = 0; i < N; i++) {
    dist[i] = maps[start][i] === undefined ? Infinity : maps[start][i];
  }
  dist[start] = 0;
  visited[start] = 1;

  for (let i = 0; i < N; i++) {
    if (i === start) continue;

    let min = Infinity;
    let minIdx = -1;
    for (let j = 0; j < N; j++) {
      if (!visited[j] && dist[j] < min) {
        min = dist[j];
        minIdx = j;
      }
    }
    if (minIdx === -1) break;
    visited[minIdx] = 1;

    for (const j in maps[minIdx]) {
      if (!visited[j]) {
        dist[j] = Math.min(maps[minIdx][j] + dist[minIdx], dist[j]);
      }
    }
  }
  const max = Math.max(...dist);
  return max === Infinity ? -1 : max;
};
