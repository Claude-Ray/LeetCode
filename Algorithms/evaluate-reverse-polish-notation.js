/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];

  for (let i = 0; i < tokens.length; i++) {
    const fn = op[tokens[i]];
    if (fn) {
      const a = stack.pop();
      const b = stack.pop();
      const result = fn(b, a);
      stack.push(result);
    } else {
      stack.push(+tokens[i]);
    }
  }
  return stack[0];
};

const op = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => parseInt(a * b < 0 ? -(-a / b) : a / b)
};
