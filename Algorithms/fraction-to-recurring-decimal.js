/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function (numerator, denominator) {
  if (numerator === 0) return '0';
  let isNegative = false;
  if (numerator < 0) {
    isNegative = !isNegative;
    numerator = -numerator;
  }
  if (denominator < 0) {
    isNegative = !isNegative;
    denominator = -denominator;
  }
  const sign = isNegative ? '-' : '';
  const integer = sign + Math.floor(numerator / denominator);
  numerator %= denominator;
  if (numerator === 0) return integer;

  let float = '';
  let index = 0;
  const dividendMap = {};
  while (numerator) {
    const i = dividendMap[numerator];
    if (i === 0) return integer + `.(${float})`;
    if (i) return integer + `.${float.slice(0, i)}(${float.slice(i)})`;

    dividendMap[numerator] = index++;
    numerator *= 10;
    if (numerator < denominator) {
      float += '0';
    } else {
      float += Math.floor(numerator / denominator);
      numerator %= denominator;
    }
  }
  return integer + (float && `.${float}`);
};
