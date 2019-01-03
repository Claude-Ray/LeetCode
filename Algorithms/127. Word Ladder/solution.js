/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) return 0;
  if (beginWord === endWord) return 1;
  if (transformable(beginWord, endWord)) return 2;
  const queue = [beginWord];
  const length = { [beginWord]: 1 };
  while (queue.length > 0) {
    const word = queue.shift();
    if (word === endWord) return length[word];
    for (const w of wordList) {
      if (!length[w] && transformable(w, word)) {
        length[w] = length[word] + 1;
        queue.push(w);
      }
    }
  }
  return 0;
};

function transformable(a, b) {
  let count = 0;
  if (a === b) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) count++;
  }
  return count === 1;
}
