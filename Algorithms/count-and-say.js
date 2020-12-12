/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  return helper('1', n);
};

function helper(n, m) {
  if (m === 1) return n;

  let digit = n[0];
  let count = 1;
  let result = '';
  for (let i = 1; i < n.length; i++) {
    if (n[i] === n[i - 1]) {
      count++;
    } else {
      result += count + digit;
      digit = n[i];
      count = 1;
    }
  }
  return helper(result + count + digit, --m);
}
