/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
  let sum = 0;
  for (let i = 1; i < timeSeries.length; i++) {
    sum += Math.min(timeSeries[i] - timeSeries[i - 1], duration);
  }
  return sum + duration;
};
