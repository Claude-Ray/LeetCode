/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
  const rowLen = grid[0].length;
  const colLen = grid.length;
  let i = colLen - 1;
  let j = 0;
  let count = 0;
  while (i >= 0 && j < rowLen) {
    if (grid[i][j] >= 0) {
      j++;
    } else {
      count += rowLen - j;
      i--;
    }
  }
  return count;
};
