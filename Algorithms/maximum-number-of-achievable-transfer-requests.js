/**
 * @param {number} n
 * @param {number[][]} requests
 * @return {number}
 */
var maximumRequests = function (n, requests) {
  let max = 0;
  function backtracing(requests, buildings, index, count) {
    if (buildings.every(n => n === 0)) {
      max = Math.max(max, count);
    }
    if (index === requests.length) return;
    const [from, to] = requests[index];
    buildings[from]--;
    buildings[to]++;
    backtracing(requests, buildings, index + 1, count + 1);
    buildings[from]++;
    buildings[to]--;
    backtracing(requests, buildings, index + 1, count);
  }
  backtracing(requests, Array(n).fill(0), 0, 0);
  return max;
};
