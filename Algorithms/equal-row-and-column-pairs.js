/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
  let pairs = 0;
  let rowMap = [];
  for (let i = 0; i < grid.length; i++) {
    const row = grid[i].join();
    rowMap[row] = rowMap[row] ? rowMap[row] + 1 : 1;
  }
  for (let j = 0; j < grid.length; j++) {
    const col = grid.map(row => row[j]).join();
    if (rowMap[col]) pairs += rowMap[col];
  }
  return pairs;
};
