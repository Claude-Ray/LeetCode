/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  let binaryNum = '';
  const bytes = num.toString(2).split('');
  for (const byte of bytes) {
    binaryNum += byte === '0' ? '1' : '0';
  }
  return parseInt(binaryNum, 2);
};