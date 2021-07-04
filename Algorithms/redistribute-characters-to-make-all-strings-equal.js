/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function (words) {
  const map = {};
  for (const word of words) {
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      map[char] = map[char] ? ++map[char] : 1;
    }
  }
  return Object.values(map).every(c => c % words.length === 0);
};
