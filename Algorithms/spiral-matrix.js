/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let index = 0;
  let rowLen = matrix[0].length;
  let colLen = matrix.length - 1;
  let i = 0;
  let j = -1;
  const result = [];
  while (result.length < matrix[0].length * matrix.length) {
    const [x, y] = directions[index];
    let l = x ? colLen : rowLen;
    if (x) colLen--;
    else rowLen--;
    while (l--) {
      i += x;
      j += y;
      result.push(matrix[i][j]);
    }
    index = (index + 1) % 4;
  }
  return result;
};
