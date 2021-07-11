/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
var findingUsersActiveMinutes = function (logs, k) {
  const uamMap = {};
  for (const [id, min] of logs) {
    if (!uamMap[id]) uamMap[id] = new Set();
    uamMap[id].add(min);
  }
  const count = Array.from({ length: k }).fill(0);
  for (const id in uamMap) {
    count[uamMap[id].size - 1]++;
  }
  return count;
};
