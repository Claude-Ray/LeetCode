/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const charMap = {};
  board.forEach(row => {
    row.forEach(char => {
      if (!charMap[char]) charMap[char] = 1;
      else charMap[char]++;
    });
  });
  // check characters
  for (let i = 0; i < word.length; i++) {
    if (!charMap[word[i]] || --charMap[word[i]] < 0) return false;
  }
  // start searching
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === word[0] && search(i, j, board, word)) return true;
    }
  }
  return false;
};

/**
 * @param {number} x
 * @param {number} y
 * @param {character[][]} board
 * @param {string} word
 */
function search(i, j, board, word) {
  if (word === '') return true;
  const char = word[0];
  if (board[i][j] !== char) return false;
  board[i][j] = '#';
  const leftWord = word.slice(1);
  const result = (i > 0 && search(i - 1, j, board, leftWord)) ||
    (i < board.length - 1 && search(i + 1, j, board, leftWord)) ||
    search(i, j - 1, board, leftWord) ||
    search(i, j + 1, board, leftWord);
  if (!result) board[i][j] = char;
  return result;
}
