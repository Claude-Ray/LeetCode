/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function (n) {
  const result = [];
  for (let i = 1; i < 10 && i <= n; i++) {
    dfs(n, i, result);
  }
  return result;
};

function dfs(n, num, result) {
  if (num > n) return;
  result.push(num);
  for (let i = 0; i < 10 && i <= n; i++) {
    dfs(n, num * 10 + i, result);
  }
}

/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder2 = function (n) {
  return Array.from({ length: n })
    .map((v, i) => i + 1)
    .sort();
};
