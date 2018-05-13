/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
  let sum = 0;
  const colMaxes = [];
  const rowMaxes = [];
  for (let i = 0; i < grid.length; i++) {
    if (!colMaxes[i]) colMaxes[i] = Math.max(...grid[i]);
    for (let j = 0; j < grid[i].length; j++) {
      if (!rowMaxes[j]) rowMaxes[j] = Math.max(...grid.map(row => row[j]));
      sum += Math.min(colMaxes[i], rowMaxes[j]) - grid[i][j];
    }
  }
  return sum;
};