/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const result = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') continue;
    let w = '';
    while (s[i] && s[i] !== ' ') {
      w += s[i++];
    }
    result.unshift(w);
  }
  return result.join(' ');
};

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords2 = function (s) {
  return s.split(' ').filter(Boolean).reverse().join(' ');
};
