/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let i = 0;
  let j = matrix[0].length - 1;
  while (i < matrix.length && j >= 0) {
    if (matrix[i][j] === target) return true;
    if (matrix[i][j] < target) i++;
    else j--;
  }
  return false;
};

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix2 = function (matrix, target) {
  const m = matrix.length;
  const n = matrix[0].length;
  let up = 0;
  let down = m - 1;
  while (up < down) {
    const mid = Math.floor((up + down) / 2);
    if (matrix[mid][0] === target || matrix[mid][n - 1] === target) {
      return true;
    } else if (matrix[mid][0] > target) {
      down = mid - 1;
    } else if (matrix[mid][n - 1] < target) {
      up = mid + 1;
    } else {
      up = down = mid;
      break;
    }
  }
  if (up > down) return false;

  let l = 0;
  let r = n - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (matrix[up][mid] === target) {
      return true;
    } else if (matrix[up][mid] > target) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return false;
};
