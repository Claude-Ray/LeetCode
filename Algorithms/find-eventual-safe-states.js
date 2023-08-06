/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function (graph) {
  const dp = [];
  function dfs(i) {
    if (dp[i] !== undefined) return dp[i];
    if (!graph[i].length) return (dp[i] = true);
    dp[i] = false;
    return (dp[i] = graph[i].every(j => dfs(j)));
  }
  graph.forEach((_, i) => dfs(i));
  return dp.map((v, i) => v && i).filter(v => v !== false);
};
