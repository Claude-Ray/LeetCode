/**
 * `for loop` is faster than `for of`
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const map = {};
  for (let i = 0; i < s.length; i++) {
    map[s[i]] = map[s[i]] ? ++map[s[i]] : 1;
  }
  for (let i = 0; i < s.length; i++) {
    if (!map[t[i]]) return false;
    map[t[i]] = --map[t[i]];
  }
  return true;
};