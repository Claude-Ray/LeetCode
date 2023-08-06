/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  const result = [];
  for (let i = 0; i < asteroids.length; i++) {
    const m = result[result.length - 1];
    const n = asteroids[i];
    if (!result.length) {
      result.push(asteroids[i]);
    } else if ((m > 0 && n > 0) || (m < 0 && n < 0) || (m < 0, n > 0)) {
      result.push(n);
    } else if (Math.abs(m) < Math.abs(n)) {
      result.pop();
      i--;
    } else if (Math.abs(m) === Math.abs(n)) {
      result.pop();
    }
  }
  return result;
};
