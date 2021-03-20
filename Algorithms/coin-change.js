/**
 * FIXME: Time Limit Exceeded
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  if (amount === 0) return 0;
  coins.sort((a, b) => a - b);
  const result = [];
  change(amount, 0, coins, result);
  if (!result.length) return -1;
  return result.sort((a, b) => a - b)[0];
};

function change(target, current, coins, result) {
  if (target === 0) return result.push(current);
  if (coins.length === 0) return;
  let n = 0;
  const coin = coins[coins.length - 1];
  while (target >= 0) {
    change(target, current++, coins.slice(0, -1), result);
    target -= coin;
  }
}
