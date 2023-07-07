/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const result = Array(s.length).fill(false);
  result.push(true);
  for (let i = s.length - 1; i >= 0; i--) {
    for (const w of wordDict) {
      if (result[i]) break;
      if (i + w.length <= s.length && s.substring(i, i + w.length) === w)
        result[i] = result[i + w.length];
    }
  }
  return result[0];
};

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak2 = function (s, wordDict) {
  const prefix = {};
  for (const w of wordDict) {
    if (prefix[w[0]]) prefix[w[0]].push(w);
    else prefix[w[0]] = [w];
  }
  const dp = [];
  return !!prefix[s[0]] && prefix[s[0]].some(w => helper(w, s, 0, prefix, dp));
};

function helper(word, s, index, dict, dp) {
  if (index + word.length > s.length) return false;
  if (dp[index + word.length]) return false;
  for (let i = 0; i < word.length; i++)
    if (word[i] !== s[index++]) return false;
  dp[index] = true;
  if (index === s.length) return true;
  if (!dict[s[index]]) return false;
  return dict[s[index]].some(w => helper(w, s, index, dict, dp));
}
