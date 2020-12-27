/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  if (!rowIndex) return [1];
  if (rowIndex === 1) return [1, 1];
  let result = [1];
  let row;
  for (let i = 0; i < rowIndex; i++) {
    row = [1];
    for (let j = 0; j < i; j++) {
      row.push(result[j] + result[j + 1]);
    }
    row.push(1);
    result = row;
  }
  return result;
};
