/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  if (sentence.length < 26) return false;
  const map = {};
  let length = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (!map[sentence[i]]) {
      map[sentence[i]] = true;
      if (++length === 26) return true;
    }
  }
  return false;
};
