/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */
var calculateTime = function (keyboard, word) {
  const map = {};
  for (let i = 0; i < keyboard.length; i++) map[keyboard[i]] = i;
  let time = map[word[0]];
  for (let i = 1; i < word.length; i++)
    time += Math.abs(map[word[i]] - map[word[i - 1]]);
  return time;
};
