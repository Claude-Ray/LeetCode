/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  for (let i = 0; i < s.length; i++) {
    const index = t.indexOf(s[i]);
    if (index === -1) return false;
    t = t.slice(index + 1);
  }
  return true;
};
