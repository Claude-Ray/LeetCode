/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function (s, k) {
  let max = 0;
  let start = 0;
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], map.has(s[i]) ? map.get(s[i]) + 1 : 1);
    while (map.size > k && start < s.length) {
      const count = map.get(s[start]);
      if (count > 1) map.set(s[start], count - 1);
      else map.delete(s[start]);
      start++;
    }
    if (map.size <= k) max = Math.max(max, i - start + 1);
  }
  return max;
};
