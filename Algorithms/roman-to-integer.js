/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const map = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1
  };
  let result = 0;
  let i = 1;
  for (; i < s.length; i++) {
    if (map[s[i - 1]] >= map[s[i]]) {
      result += map[s[i - 1]];
    } else {
      result += map[s[i]] - map[s[i - 1]];
      i++;
    }
  }
  if (i === s.length) result += map[s[s.length - 1]];
  return result;
};
