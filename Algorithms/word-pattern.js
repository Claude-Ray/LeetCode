/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const patternMap = {};
  const wordMap = {};
  const words = s.split(' ');
  return (
    words.length === pattern.length &&
    words.every(
      (word, i) =>
        (patternMap[pattern[i]]
          ? patternMap[pattern[i]] === word
          : (patternMap[pattern[i]] = word)) &&
        (wordMap[word]
          ? wordMap[word] === pattern[i]
          : (wordMap[word] = pattern[i]))
    )
  );
};
