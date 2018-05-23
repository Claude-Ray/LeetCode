/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows < 2) return s;
  let result = '';
  for (let i = 0; i < numRows; i++) {
    let index = i;
    while (s[index]) {
      const space = (numRows - (index % (numRows - 1))) * 2 - 2;
      result += s[index];
      index += space;
    }
  }
  return result;
};