/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let length = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === ' ') {
      if (length) return length;
    } else length++;
  }
  return length;
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord2 = function(s) {
  return s.trim().split(' ').pop().length;
};
