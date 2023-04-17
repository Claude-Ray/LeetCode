/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const len = prices.length;
  if (!len) return 0;
  let max = 0;
  let curr = prices[0];
  for (let i = 1; i < len; i++) {
    curr = Math.min(prices[i], curr);
    if (prices[i] > prices[i - 1]) {
      max = Math.max(max, prices[i] - curr);
    }
  }
  return max;
};
