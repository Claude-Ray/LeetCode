/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  let row = 0;
  let col = 0;
  const directions = moves.split('');
  for (const direction of directions) {
    if (direction === 'R') row++;
    else if (direction === 'L') row--;
    else if (direction === 'U') col++;
    else if (direction === 'D') col--;
  }
  return row === 0 && col === 0;
};