/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) return 0;
  if (beginWord === endWord) return 1;
  const queue = [beginWord];
  const length = { [beginWord]: 1 };
  const unvisited = new Set(wordList);
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  while (queue.length) {
    const word = queue.shift();
    for (let i = 0; i < word.length; i++) {
      for (const ch of alphabet) {
        const newWord = word.slice(0, i) + ch + word.slice(i + 1);
        if (!length[newWord] && unvisited.has(newWord)) {
          length[newWord] = length[word] + 1;
          if (newWord === endWord) return length[newWord];
          unvisited.delete(newWord);
          queue.push(newWord);
        }
      }
    }
  }
  return 0;
};
