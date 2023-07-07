/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function (s) {
  let one = 0;
  let flips = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '1') one++;
    // Count (1 -> 0) + min(0 -> 1, 1 -> 0) at the current index
    // while the previous is always regarded as 0.
    else flips = Math.min(flips + 1, one);
  }
  return flips;
};
