/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function (costs, coins) {
  const arr = costs.filter(n => n <= coins).sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum === coins) return i + 1;
    if (sum > coins) return i;
  }
  return arr.length;
};
