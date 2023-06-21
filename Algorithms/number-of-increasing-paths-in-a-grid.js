/**
 * @param {number[][]} grid
 * @return {number}
 */
var countPaths = function (grid) {
  const matrix = Array.from({ length: grid.length }).map(() => []);
  const mod = 10 ** 9 + 7;

  function dfs(pre, i, j) {
    if (
      i < 0 ||
      i === grid.length ||
      j < 0 ||
      j === grid[0].length ||
      pre >= grid[i][j]
    )
      return 0;
    if (matrix[i][j]) return matrix[i][j];
    matrix[i][j] =
      (1 +
        dfs(grid[i][j], i + 1, j) +
        dfs(grid[i][j], i - 1, j) +
        dfs(grid[i][j], i, j + 1) +
        dfs(grid[i][j], i, j - 1)) %
      mod;
    return matrix[i][j];
  }

  let count = 0;
  for (let i = 0; i < grid.length; i++)
    for (let j = 0; j < grid[0].length; j++)
      count = (count + dfs(0, i, j)) % mod;
  return count;
};
