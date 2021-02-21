/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  const NUM = [2, 3, 5];
  const L = [1, 1, 1];
  const I = [0, 0, 0];
  const ugly = [];
  for (let j = 0; j < n; j++) {
    const min = Math.min(...L);
    ugly.push(min);
    L.forEach((l, i) => l === min && (L[i] = NUM[i] * ugly[I[i]++]));
  }
  return ugly[n - 1];
};
