/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  let sub = s[0];
  for (let i = 1; i <= s.length / 2; i++) {
    if (s[i] === sub[0] && !s.split(sub).join('')) return true;
    sub += s[i];
  }
  return false;
};
