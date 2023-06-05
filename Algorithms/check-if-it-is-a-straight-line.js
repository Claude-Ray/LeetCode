/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  let slope;
  const [x, y] = coordinates[0];
  for (let i = 1; i < coordinates.length; i++) {
    const [x1, y1] = coordinates[i];
    if (x1 === x) {
      if (y1 === y) continue;
      return coordinates.every(c => c[0] === x);
    } else if (y1 === y) {
      return coordinates.every(c => c[1] === y);
    }
    const s = (x1 - x) / (y1 - y);
    if (!slope) {
      slope = s;
    } else if (slope !== s) {
      return false;
    }
  }
  return true;
};
