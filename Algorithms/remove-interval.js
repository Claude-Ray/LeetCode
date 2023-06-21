/**
 * @param {number[][]} intervals
 * @param {number[]} toBeRemoved
 * @return {number[][]}
 */
var removeInterval = function (intervals, toBeRemoved) {
  const result = [];
  intervals.sort((a, b) => a[0] - b[0]);
  for (const interval of intervals) {
    if (interval[0] < toBeRemoved[0])
      result.push([interval[0], Math.min(interval[1], toBeRemoved[0])]);
    if (interval[1] > toBeRemoved[1])
      result.push([Math.max(interval[0], toBeRemoved[1]), interval[1]]);
  }
  return result;
};
