/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  const unvisited = new Set(wordList);
  if (!unvisited.has(endWord)) return 0;
  if (beginWord === endWord) return 1;
  const queue = [beginWord];
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let length = 1;
  while (queue.length) {
    const queueLength = queue.length;
    for (let j = 0; j < queueLength; j++) {
      const word = queue.shift();
      for (let i = 0; i < word.length; i++) {
        for (const ch of alphabet) {
          const newWord = word.slice(0, i) + ch + word.slice(i + 1);
          if (unvisited.has(newWord)) {
            if (newWord === endWord) return length + 1;
            unvisited.delete(newWord);
            queue.push(newWord);
          }
        }
      }
    }
    length++;
  }
  return 0;
};
