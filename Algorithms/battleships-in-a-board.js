/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function (board) {
  let count = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (
        board[i][j] === 'X' &&
        (i === board.length - 1 || board[i + 1][j] === '.') &&
        (!board[i][j + 1] || board[i][j + 1] === '.')
      ) {
        count++;
      }
    }
  }
  return count;
};
