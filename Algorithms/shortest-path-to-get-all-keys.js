/**
 * @param {string[]} grid
 * @return {number}
 */
var shortestPathAllKeys = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  let keyCount = 0;
  let si = 0;
  let sj = 0;
  // visited[i][j][lock]
  const visited = {};
  for (let i = 0; i < m; i++) {
    visited[i] = {};
    for (let j = 0; j < n; j++) {
      visited[i][j] = {};
      if (grid[i][j] === '@') {
        si = i;
        sj = j;
      } else if (grid[i][j].charCodeAt() >= 97) {
        keyCount++;
      }
    }
  }
  const endState = (1 << keyCount) - 1;

  let count = 0;
  let queue = [{ i: si, j: sj, k: 0 }];
  while (queue.length) {
    const newQueue = [];
    for (let { i, j, k } of queue) {
      const c = grid[i][j];
      if (!c || c === '#') continue;
      if (visited[i][j][k]) continue;
      visited[i][j][k] = true;
      if (c.toLowerCase() !== c) {
        // is lock
        if ((k & (1 << (c.charCodeAt() - 65))) === 0) {
          continue;
        }
      } else if (c.charCodeAt() >= 97) {
        // is key
        k = k | (1 << (c.charCodeAt() - 97));
        if (k === endState) return count;
      }
      if (i > 0) newQueue.push({ i: i - 1, j, k });
      if (i < m - 1) newQueue.push({ i: i + 1, j, k });
      if (j > 0) newQueue.push({ i, j: j - 1, k });
      if (j < n - 1) newQueue.push({ i, j: j + 1, k });
    }
    queue = newQueue;
    count++;
  }

  return -1;
};
