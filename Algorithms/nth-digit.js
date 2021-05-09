/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
  if (n < 10) return n;
  let i = '9';
  let j = 9;
  let l = 9;
  while (n > l) {
    const J = j * 10;
    const L = l + J * (i.length + 1);
    if (L === n) return 9;
    if (L > n) break;
    l = L;
    j = J;
    i += '9';
  }
  const diff = n - l;
  const num = (+i + Math.ceil(diff / (i.length + 1))).toString();
  return num[(diff - 1) % (i.length + 1)];
};
