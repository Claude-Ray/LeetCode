/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
  const codes = [0];
  if (n === 0) return codes;

  const bits = Array(n).fill(0);
  const endIndex = n - 1;
  for (let i = 0; i < Math.pow(2, endIndex); i++) {
    // change the bit before the last `1`
    const lastOneIndex = bits.lastIndexOf(1) - 1;
    if (lastOneIndex > -1) {
      bits[lastOneIndex] = +!bits[lastOneIndex];
      codes.push(parseInt(bits.join(''), 2));
    }
    // change the bit at the end of bits
    bits[endIndex] = +!bits[endIndex];
    codes.push(parseInt(bits.join(''), 2));
  }
  return codes;
};