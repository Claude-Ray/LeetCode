/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function (s) {
  const map = {};
  for (let i = 0; i < s.length; i++) map[s[i]] = map[s[i]] ? map[s[i]] + 1 : 1;
  return Object.values(map).filter(n => n % 2).length <= 1;
};
