/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let altitude = 0;
  let max = 0;
  for (const g of gain) {
    altitude += g;
    max = Math.max(max, altitude);
  }
  return max;
};
