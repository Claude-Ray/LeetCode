/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  return word1.length === word2.length && helper(word1) === helper(word2);
};

function helper(word) {
  const map = {};
  for (let i = 0; i < word.length; i++)
    map[word[i]] = map[word[i]] ? map[word[i]] + 1 : 1;
  return Object.values(map)
    .sort((a, b) => a - b)
    .concat(Object.keys(map).sort())
    .join('');
}
