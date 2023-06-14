/**
 * @param {number} n
 * @return {boolean}
 */
var confusingNumber = function (n) {
  const map = {
    0: '0',
    1: '1',
    6: '9',
    8: '8',
    9: '6',
  };
  const s = n.toString();
  let ns = '';
  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) return false;
    ns = map[s[i]] + ns;
  }
  return ns !== s;
};
