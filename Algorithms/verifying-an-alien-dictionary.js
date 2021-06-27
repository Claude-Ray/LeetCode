/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  const map = {};
  for (let i = 0; i < order.length; i++) map[order[i]] = i;
  for (let i = 0; i < words.length - 1; i++) {
    const word = words[i];
    const next = words[i + 1];
    for (let j = 0; j < word.length; j++) {
      if (!next[j]) return false;
      if (map[word[j]] > map[next[j]]) return false;
      if (map[word[j]] < map[next[j]]) break;
    }
  }
  return true;
};
