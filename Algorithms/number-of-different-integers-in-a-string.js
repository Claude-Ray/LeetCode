/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function (word) {
  return new Set(
    word
      .split(/[a-z]/)
      .filter(n => n.length)
      .map(n => n.replace(/^0+/, ''))
  ).size;
};
