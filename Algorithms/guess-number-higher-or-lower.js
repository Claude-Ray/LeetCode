/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return              -1 if num is lower than the guess number
 *                       1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */
var guess = function (num, pick) {
  if (num === pick) return 0;
  return num > pick ? -1 : 1;
};

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let l = 0;
  let r = n;
  while (l <= r) {
    const mid = Math.ceil((l + r) / 2);
    const ret = guess(mid);
    if (ret === 0) return mid;
    if (ret === -1) r = mid - 1;
    else l = mid + 1;
  }
  return -1;
};
