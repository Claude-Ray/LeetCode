/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const chars = s.split('');
  let maxLen = 0;
  let stack = '';
  for (let i = 0; i < chars.length; i++) {
    const index = stack.indexOf(chars[i]);
    stack += chars[i];
    if (index === -1)
      maxLen = Math.max(maxLen, stack.length);
    else
      stack = stack.substring(index + 1);
  }
  return maxLen;
};