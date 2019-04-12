/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  if (triangle.length === 1) return triangle[0][0];
  const height = triangle.length;
  const res = [];
  res[height - 1] = triangle[height - 1];
  for (let i = height - 2; i >= 0; i--) {
    res[i] = [];
    for (let j = 0; j < triangle[i].length; j++)
      res[i][j] = Math.min(res[i + 1][j], res[i + 1][j + 1]) + triangle[i][j];
  }
  return res[0][0];
};
