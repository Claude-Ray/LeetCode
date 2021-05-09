/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  if (num === 1) return true;
  let left = 1;
  let right = Math.floor(num / 2);
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const product = mid * mid;
    if (product === num) return true;
    if (product > num) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
};
