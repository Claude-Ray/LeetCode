/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const heap = [intervals[0][1]];
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] >= heap[0]) heap.shift();
    heap.push(intervals[i][1]);
    heap.sort((a, b) => a - b);
  }
  return heap.length;
};

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms2 = function (intervals) {
  intervals.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));
  let count = 0;

  while (intervals.length) {
    count++;
    const newRooms = [];
    let pre = 0;
    for (let i = 1; i < intervals.length; i++) {
      if (intervals[pre][1] > intervals[i][0]) newRooms.push(intervals[i]);
      else pre = i;
    }
    if (!newRooms.length) return count;
    intervals = newRooms;
  }
  return count;
};
