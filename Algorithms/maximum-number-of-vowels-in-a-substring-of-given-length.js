const VowelSet = new Set(['a', 'e', 'i', 'o', 'u']);
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  let len = 0;
  let max = 0;
  let cur = 0;
  for (let i = 0; i < s.length; i++) {
    if (VowelSet.has(s[i])) cur++;
    if (len < k) len++;
    else if (VowelSet.has(s[i - k])) cur--;
    if (len === k) max = Math.max(max, cur);
  }
  return max;
};
