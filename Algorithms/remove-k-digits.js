/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  if (k >= num.length) return '0';
  if (k === 0) return num;
  const stack = [];
  for (let i = 0; i < num.length; i++) {
    while (stack[stack.length - 1] > num[i] && k) {
      stack.pop();
      k--;
    }
    if (stack.length || num[i] !== 0) stack.push(num[i]);
  }
  while (k--) stack.pop();
  while (stack.length > 1 && stack[0] === '0') stack.shift();
  return stack.join('');
};
