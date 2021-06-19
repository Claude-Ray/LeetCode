/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function (aliceSizes, bobSizes) {
  const aliceSet = new Set(aliceSizes);
  const bobSet = new Set(bobSizes);
  const aliceSum = aliceSizes.reduce((sum, n) => sum + n, 0);
  const bobSum = bobSizes.reduce((sum, n) => sum + n, 0);
  const diff = aliceSum - bobSum;
  for (const n of aliceSet) {
    const m = (2 * n - diff) / 2;
    if (bobSet.has(m)) return [n, m];
  }
};
