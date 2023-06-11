/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function (expression) {
  const nums = [];
  let num = '';
  for (let i = 0; i < expression.length; i++) {
    if (expression[i] === '/') {
      nums.push(+num);
      num = '';
    } else if ((expression[i] === '+' || expression[i] === '-') && num) {
      nums.push(+num);
      num = expression[i];
    } else {
      num += expression[i];
    }
  }
  nums.push(+num);

  let numerator = nums[0];
  let denominator = nums[1];
  let i = 2;
  while (i < nums.length) {
    const n = nums[i++];
    const d = nums[i++];
    numerator = n * denominator + numerator * d;
    denominator = numerator ? d * denominator : 1;
    const g = gcd(denominator, Math.abs(numerator));
    if (g) {
      numerator /= g;
      denominator /= g;
    }
  }
  return `${numerator}/${denominator}`;
};

function gcd(a, b) {
  if (b) while ((a %= b) && (b %= a));
  return a + b;
}
