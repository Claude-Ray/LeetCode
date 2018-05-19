/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  const quotient = calcuQuotient(dividend, divisor);
  if (quotient > 2147483647) return 2147483647;
  if (quotient < -2147483648) return -2147483648;
  return quotient;
};

function calcuQuotient(dividend, divisor, isPositive) {
  if (dividend === 0) return 0;
  if (divisor === 1) return dividend;
  if (divisor === -1) return -dividend;

  if (!isPositive) {
    isPositive = true;
    if (dividend < 0) {
      dividend = Math.abs(dividend);
      if (divisor > 0) {
        isPositive = false;
      } else {
        divisor = Math.abs(divisor);
      }
    } else if (divisor < 0) {
      divisor = Math.abs(divisor);
      isPositive = false;
    }
  }

  if (dividend < divisor) return 0;

  if (dividend < divisor + divisor) return isPositive ? 1 : -1;

  let quotient = 1;
  let sum = divisor;
  while ((sum + sum) <= dividend) {
    sum += sum;
    quotient += quotient;
  }
  return isPositive
    ? (quotient + calcuQuotient(dividend - sum, divisor, true))
    : -(quotient + calcuQuotient(dividend - sum, divisor, true));
}