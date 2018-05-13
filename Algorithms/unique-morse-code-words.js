/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  const morse = ['.-', '-...', '-.-.', '-..', '.', '..-.',
    '--.', '....', '..', '.---', '-.-', '.-..', '--',
    '-.', '---', '.--.', '--.-', '.-.', '...', '-',
    '..-', '...-', '.--', '-..-', '-.--', '--..'];

  const codes = words.map(word =>
    word.split('')
      .map(char => morse[char.charCodeAt(0) - 97])
      .join('')
  );
  return codes.filter((morseWord, i) => codes.indexOf(morseWord) === i).length;
};