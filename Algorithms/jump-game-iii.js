/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function (arr, start) {
  const visited = [];
  const stack = [start];
  while (stack.length) {
    const index = stack.pop();
    if (visited[index]) continue;
    if (arr[index] === 0) return true;
    if (index - arr[index] >= 0) stack.push(index - arr[index]);
    if (index + arr[index] < arr.length) stack.push(index + arr[index]);
    visited[index] = true;
  }
  return false;
};
