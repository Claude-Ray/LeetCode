/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  s = s.sort((a, b) => a - b);
  g = g.sort((a, b) => a - b);
  let result = 0;
  for (let i = 0; i < s.length && result < g.length; i++) {
    if (g[result] <= s[i]) result++;
  }
  return result;
};
