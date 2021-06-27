/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const sMap = {};
  const tMap = {};
  for (let i = 0; i < s.length; i++) {
    si = sMap[s[i]];
    ti = tMap[t[i]];
    if (si !== ti) return false;
    if (si === undefined) {
      sMap[s[i]] = i;
      tMap[t[i]] = i;
    }
  }
  return true;
};

console.log(isIsomorphic('add', 'egg'));
