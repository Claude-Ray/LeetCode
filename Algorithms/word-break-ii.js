/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
  return helper(s, wordDict, 0, [], []);
};

function helper(s, wordDict, index, cur, res) {
  if (index === s.length) return res.push(cur.join(' '));

  for (const w of wordDict) {
    if (
      w.length + index <= s.length &&
      s.substring(index, index + w.length) === w
    ) {
      helper(s, wordDict, index + w.length, [...cur, w], res);
    }
  }
  return res;
}
