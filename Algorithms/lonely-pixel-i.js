/**
 * @param {character[][]} picture
 * @return {number}
 */
var findLonelyPixel = function (picture) {
  const rowSum = Array.from({ length: picture.length }).fill(0);
  const colSum = Array.from({ length: picture[0].length }).fill(0);
  // Save j index of the last B in each row
  const jIndex = Array.from({ length: picture.length }).fill(-1);
  for (let i = 0; i < picture.length; i++) {
    for (let j = 0; j < picture[0].length; j++) {
      if (picture[i][j] === 'B') {
        rowSum[i]++;
        colSum[j]++;
        jIndex[i] = j;
      }
    }
  }
  return jIndex.reduce(
    (count, j, i) => (rowSum[i] === 1 && colSum[j] === 1 ? count + 1 : count),
    0
  );
};
