/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const map = { '(': ')', '[': ']', '{': '}' };
  const openSigns = Object.keys(map);
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (openSigns.includes(s[i]))
      stack.push(map[s[i]]);
    else if (stack.pop() !== s[i])
      return false;
  }
  return stack.length === 0;
};