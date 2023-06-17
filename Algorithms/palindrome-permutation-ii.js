/**
 * @param {string} s
 * @return {string[]}
 */
var generatePalindromes = function (s) {
  const map = {};
  for (let i = 0; i < s.length; i++) map[s[i]] = map[s[i]] ? map[s[i]] + 1 : 1;
  const odds = Object.keys(map).filter(c => map[c] % 2);
  if (odds.length > 1) return [];
  if (odds.length) map[odds[0]]--;
  return helper(odds[0] || '', map, s.length, []);
};

function helper(s, map, len, res) {
  if (s.length === len) {
    res.push(s);
    return res;
  }
  for (const key in map) {
    if (!map[key]) continue;
    helper(`${key}${s}${key}`, { ...map, [key]: map[key] - 2 }, len, res);
  }
  return res;
}
