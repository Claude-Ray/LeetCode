/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function (low, high) {
  low = low % 2 === 1 ? low - 1 : low;
  high = high % 2 === 1 ? high + 1 : high;
  return (high - low) / 2;
};
