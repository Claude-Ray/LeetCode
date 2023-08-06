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

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit2 = function (prices) {
  if (!prices.length) return 0;
  let hold = prices[0];
  let profit = 0;
  for (const p of prices) {
    hold = Math.min(p, hold);
    if (hold < p) profit = Math.max(profit, p - hold);
  }
  return profit;
};
