/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
  let left = 0;
  let right = s.length - 1;
  while (left < right) if (s[left++] !== s[right--]) return false;
  return true;
};
