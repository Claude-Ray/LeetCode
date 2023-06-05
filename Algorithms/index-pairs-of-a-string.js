/**
 * @param {string} text
 * @param {string[]} words
 * @return {number[][]}
 */
var indexPairs = function (text, words) {
  const result = [];
  words.forEach(word => getWordPair(text, word, result));
  return result.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));
};

function getWordPair(text, word, result, offset = 0) {
  const i = text.indexOf(word);
  if (i !== -1) {
    offset += i;
    result.push([offset, offset + word.length - 1]);
    getWordPair(text.slice(i + 1), word, result, offset + 1);
  }
  return result;
}
