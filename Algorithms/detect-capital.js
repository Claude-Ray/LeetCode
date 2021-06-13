/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  if (word.length === 1) return true;
  const isFullCapital = isCapital(word[0]) && isCapital(word[1]);
  for (let i = 1; i < word.length; i++)
    if (isCapital(word[i]) !== isFullCapital) return false;
  return true;
};

function isCapital(char) {
  return char <= 'Z';
}
