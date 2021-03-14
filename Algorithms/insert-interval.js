/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  const result = [];
  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][1] < newInterval[0]) {
      result.push(intervals[i]);
      continue;
    }
    if (intervals[i][1] === newInterval[0]) {
      newInterval[0] = intervals[i][0];
      continue;
    }
    if (intervals[i][0] === newInterval[1]) {
      newInterval[1] = intervals[i][1];
      result.push(newInterval, ...intervals.slice(i + 1));
      return result;
    }
    if (intervals[i][0] > newInterval[1]) {
      result.push(newInterval, ...intervals.slice(i));
      return result;
    }
    if (intervals[i][0] < newInterval[0]) newInterval[0] = intervals[i][0];
    if (intervals[i][1] > newInterval[1]) newInterval[1] = intervals[i][1];
  }
  result.push(newInterval);
  return result;
};
