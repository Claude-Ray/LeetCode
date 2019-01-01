/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const result = [];
  helper(n, k, 1, [], result);
  return result;
};

function helper(n, k, s, cur, res) {
  if (cur.length === k) return res.push(cur.slice());
  for (let i = s; i <= n; i++) {
    cur.push(i);
    helper(n, k, i + 1, cur, res);
    cur.pop();
  }
}
