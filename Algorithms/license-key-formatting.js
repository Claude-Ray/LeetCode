/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function (s, k) {
  s = s.split('-').join('');
  const result = [];
  for (let i = s.length; i > 0; i -= k) {
    result.unshift(s.slice(i < k ? 0 : i - k, i));
  }
  return result.join('-').toUpperCase();
};
