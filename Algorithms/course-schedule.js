/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const map = {};
  const checkSet = new Set();
  for (const [a, b] of prerequisites) {
    if (!map[a]) map[a] = [];
    map[a].push(b);
    checkSet.add(b);
  }
  const visited = new Set();
  function dfs(n) {
    if (!map[n]) return true;
    if (visited.has(n)) return false;
    visited.add(n);
    if (map[n].every(m => dfs(m))) {
      delete map[n];
      return true;
    }
    return false;
  }
  return [...checkSet.values()].every(dfs);
};
