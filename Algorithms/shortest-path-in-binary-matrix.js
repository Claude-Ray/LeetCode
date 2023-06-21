/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  const n = grid.length;
  if (grid[0][0] === 1 || grid[n - 1][n - 1] === 1) return -1;

  const queue = [[0, 0, 1]];
  while (queue.length) {
    const [i, j, visited] = queue.shift();
    if (i === n - 1 && j === n - 1) return visited;
    [
      [i, j - 1],
      [i, j + 1],
      [i - 1, j],
      [i - 1, j - 1],
      [i - 1, j + 1],
      [i + 1, j],
      [i + 1, j - 1],
      [i + 1, j + 1],
    ].forEach(([pi, pj]) => {
      if (!grid[pi] || grid[pi][pj] !== 0) return;
      queue.push([pi, pj, visited + 1]);
      grid[pi][pj] = 1;
    });
  }
  return -1;
};

/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix2 = function (grid) {
  const n = grid.length;
  if (grid[0][0] === 1) return -1;
  const matrix = Array.from({ length: n }).map(() => Array(n).fill(Infinity));
  matrix[0][0] = 1;
  const queue = [[0, 0]];
  while (queue.length) {
    const [i, j] = queue.shift();
    if (i === n - 1 && j === n - 1) return matrix[i][j];
    [
      [i, j - 1],
      [i, j + 1],
      [i - 1, j],
      [i - 1, j - 1],
      [i - 1, j + 1],
      [i + 1, j],
      [i + 1, j - 1],
      [i + 1, j + 1],
    ].forEach(([pi, pj]) => {
      if (!grid[pi] || grid[pi][pj] !== 0 || matrix[pi][pj] !== Infinity)
        return;
      matrix[pi][pj] = matrix[i][j] + 1;
      queue.push([pi, pj]);
    });
  }
  return -1;
};
