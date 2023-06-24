/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const stack = [];
  const result = Array(temperatures.length).fill(0);
  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length && temperatures[i] > stack[stack.length - 1].v) {
      const { k, v } = stack.pop();
      result[k] = i - k;
    }
    stack.push({ k: i, v: temperatures[i] });
  }
  return result;
};
