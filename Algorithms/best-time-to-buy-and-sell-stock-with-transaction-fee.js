/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  let profit = 0;
  let hold = -prices[0];
  for (const p of prices) {
    hold = Math.max(hold, profit - p);
    // recalculate profit at the current price
    profit = Math.max(profit, hold + p - fee);
  }
  return profit;
};
