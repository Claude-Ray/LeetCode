/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function (wall) {
  if (wall.length === 1) return wall[0].length > 1 ? 0 : 1;
  const sums = [];
  for (const row of wall) {
    if (row.length === 1) continue;
    let index = 0;
    for (let i = 0; i < row.length - 1; i++) {
      index += row[i];
      sums[index] = sums[index] ? sums[index] + 1 : 1;
    }
  }
  return wall.length - Math.max(0, ...sums.filter(Boolean));
};
