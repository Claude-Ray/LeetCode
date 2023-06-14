/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function (n, headID, manager, informTime) {
  const managerMap = {};
  for (let i = 0; i < manager.length; i++) {
    if (managerMap[manager[i]]) managerMap[manager[i]].push(i);
    else managerMap[manager[i]] = [i];
  }
  const result = [];
  result[headID] = 0;
  const stack = [headID];
  while (stack.length) {
    const m = stack.pop();
    if (!managerMap[m]) continue;
    for (const e of managerMap[m]) {
      result[e] = result[m] + informTime[m];
      stack.push(e);
    }
  }
  return Math.max(...result);
};
