/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
  const width = mat[0].length;
  const height = mat.length;
  const total = width * height;
  const result = [];

  let x = 0;
  let y = 0;
  while (result.length < total) {
    while (mat[x] && mat[x][y] !== undefined) {
      result.push(mat[x][y]);
      x -= 1;
      y += 1;
    }
    if (y >= width) {
      y = width - 1;
      x += 2;
    } else {
      x += 1;
    }
    while (mat[x] && mat[x][y] !== undefined) {
      result.push(mat[x][y]);
      x += 1;
      y -= 1;
    }
    if (x >= height) {
      x = height - 1;
      y += 2;
    } else {
      y += 1;
    }
  }
  return result;
};
