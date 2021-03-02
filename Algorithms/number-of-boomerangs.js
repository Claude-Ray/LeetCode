/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function (points) {
  if (points.length < 3) return 0;
  const distanceMaps = Array.from({ length: points.length }).map(() => ({}));
  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points.length; j++) {
      if (i !== j) {
        const dis =
          Math.pow(points[i][0] - points[j][0], 2) +
          Math.pow(points[i][1] - points[j][1], 2);
        if (distanceMaps[i][dis]) {
          distanceMaps[i][dis]++;
        } else {
          distanceMaps[i][dis] = 1;
        }
      }
    }
  }
  let result = 0;
  for (let i = 0; i < distanceMaps.length; i++) {
    for (const count of Object.values(distanceMaps[i])) {
      if (count > 1) {
        result += count * (count - 1);
      }
    }
  }
  return result;
};
