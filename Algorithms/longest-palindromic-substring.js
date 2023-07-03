/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let max = 0;
  let left = 0;
  let right = 1;
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < 2; j++) {
      let l = i;
      let r = i + j;
      while (l >= 0 && r < s.length && s[l] === s[r]) {
        if (r - l + 1 > max) {
          max = r - l + 1;
          left = l;
          right = r + 1;
        }
        l--;
        r++;
      }
    }
  }
  return s.substring(left, right);
};
