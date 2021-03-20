/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function (n, primes) {
  const nexts = Array.from({ length: primes.length }).fill(1);
  const indexes = Array.from({ length: primes.length }).fill(0);
  const ugly = [];
  for (let i = 0; i < n; i++) {
    const min = Math.min(...nexts);
    ugly.push(min);
    nexts.forEach(
      (n, j) => n === min && (nexts[j] = primes[j] * ugly[indexes[j]++])
    );
  }
  return ugly.pop();
};
