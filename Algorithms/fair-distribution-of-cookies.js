/**
 * @param {number[]} cookies
 * @param {number} k
 * @return {number}
 */
var distributeCookies = function (cookies, k) {
  const res = { min: Number.MAX_SAFE_INTEGER };
  backtracing(cookies, 0, Array(k).fill(0), res);
  return res.min;
};

function backtracing(cookies, index, children, res) {
  for (let i = 0; i < children.length; i++) {
    children[i] += cookies[index];
    if (index === cookies.length - 1) {
      res.min = Math.min(res.min, Math.max(...children));
    } else {
      backtracing(cookies, index + 1, children, res);
    }
    children[i] -= cookies[index];
  }
}
