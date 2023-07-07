/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */
var minimumTime = function (time, totalTrips) {
  let l = 0;
  let r = totalTrips * time[0];
  while (l < r) {
    const mid = Math.floor((l + r) / 2);
    let sum = 0;
    for (let i = 0; i < time.length && sum < totalTrips; i++) {
      sum += Math.floor(mid / time[i]);
    }
    if (sum < totalTrips) l = mid + 1;
    else r = mid;
  }
  return l;
};
