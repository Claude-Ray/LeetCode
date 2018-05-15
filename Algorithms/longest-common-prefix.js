/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return '';
  if (strs.length === 1) return strs[0];
  let common = '';
  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i];
    if (strs.some(str => str[i] !== strs[0][i]))
      break;
    common += char;
  }
  return common;
};