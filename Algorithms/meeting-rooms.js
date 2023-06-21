/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function (intervals) {
  return intervals
    .sort((a, b) => a[0] - b[0])
    .every((interval, i) => i === 0 || intervals[i - 1][1] <= interval[0]);
};
