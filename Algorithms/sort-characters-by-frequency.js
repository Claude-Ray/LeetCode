/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  const map = {};
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      map[s[i]]++;
    } else {
      map[s[i]] = 1;
    }
  }
  return Object.entries(map)
    .sort((a, b) => b[1] - a[1])
    .map(([c, n]) => Array.from({ length: n }).fill(c).join(''))
    .join('');
};
