/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function (n) {
  /**
   * f(n) = f(n - 1) + f(n - 2) + 2 * p(n - 1)
   * p(n) = p(n - 1) + f(n - 2)
   *
   * f(n) = f(n - 1) + f(n - 2) + 2 * (f(n - 3) + f(n - 4) + ... + f(0))
   * f(n - 1) = f(n - 2) + f(n - 3) + 2 * (f(n - 4) + f(n - 5) + ... + f(0))
   *
   * f(n) = f(n - 1) + f(n - 2) + 2 * (f(n - 3) + f(n - 4) + ... + f(0))
   *      = f(n - 1) + f(n - 2) + f(n - 3) + 2 * (f(n - 4) + f(n - 5) + ... + f(0)) + f(n - 3)
   *      = f(n - 1) + f(n - 1) + f(n - 3)
   */
  const mod = 10 ** 9 + 7;
  const f = [0, 1, 2, 5];
  for (let i = 4; i <= n; i++) f[i] = (2 * f[i - 1] + f[i - 3]) % mod;
  return f[n];
};
