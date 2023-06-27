/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;
  let hold = -prices[0];
  for (const p of prices) {
    hold = Math.max(hold, profit - p);
    profit = Math.max(profit, hold + p);
  }
  return profit;
};
