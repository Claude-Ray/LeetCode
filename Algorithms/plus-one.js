/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] !== 9) return ++digits[i] && digits;
    digits[i] = 0;
  }
  if (digits[0] === 0) digits.unshift(1);
  return digits;
};
