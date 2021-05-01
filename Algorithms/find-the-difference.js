/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  const sMap = {};
  const tMap = {};
  for (let i = 0; i < t.length; i++) {
    sMap[s[i]] = sMap[s[i]] ? ++sMap[s[i]] : 1;
    tMap[t[i]] = tMap[t[i]] ? ++tMap[t[i]] : 1;
  }
  return Object.keys(tMap).find(c => tMap[c] !== sMap[c]);
};
