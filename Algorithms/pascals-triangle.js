/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (!numRows) return [];
  const result = [[1]];
  for (let i = 0; i < numRows - 1; i++) {
    const row = [1];
    for (let j = 0; j < i; j++) {
      row.push(result[i][j] + result[i][j + 1]);
    }
    row.push(1);
    result.push(row);
  }
  return result;
};
