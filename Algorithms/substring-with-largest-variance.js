/**
 * @param {string} s
 * @return {number}
 */
var largestVariance = function (s) {
  const map = {};
  for (let i = 0; i < s.length; i++) map[s[i]] = map[s[i]] ? map[s[i]] + 1 : 1;
  const keys = Object.keys(map);
  let max = 0;
  for (const long of keys) {
    for (const short of keys) {
      if (long === short) continue;
      let longCount = 0;
      let shortCount = 0;
      let longLeft = map[long];
      let shortLeft = map[short];
      for (let i = 0; i < s.length; i++) {
        if (s[i] === long) {
          longCount++;
          longLeft--;
        } else if (s[i] === short) {
          shortCount++;
          shortLeft--;
        }
        if (shortCount && longCount > shortCount)
          max = Math.max(max, longCount - shortCount);
        if (!longLeft && shortCount) break;
        if (longCount < shortCount && shortLeft) {
          longCount = 0;
          shortCount = 0;
        }
      }
    }
  }
  return max;
};
