/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let k = '';
  let str = '';
  const kStack = [];
  const strStack = [];
  for (let i = 0; i < s.length; i++) {
    // get number K
    while (s[i] < 10) k += s[i++];

    if (s[i] === '[') {
      kStack.push(k);
      strStack.push(str);
      k = '';
      str = '';
    } else if (s[i] === ']') {
      let extK = kStack.pop();
      let extStr = '';
      while (extK-- > 0) {
        extStr += str;
      }
      str = strStack.pop() + extStr;
    } else {
      str += s[i];
    }
  }
  return str;
};
