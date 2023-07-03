const ALPHA = 'ZABCDEFGHIJKLMNOPQRSTUVWXY';
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  let res = '';
  while (columnNumber) {
    const i = columnNumber % 26;
    res = ALPHA[i] + res;
    columnNumber = Math.floor((columnNumber - 1) / 26);
  }
  return res;
};
