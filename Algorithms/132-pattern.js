/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
  const mini = [nums[0]];
  for (let i = 1; i < nums.length; i++)
    mini[i] = Math.min(mini[i - 1], nums[i]);
  const stack = [];
  for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i] > mini[i]) {
      while (stack.length && stack[stack.length - 1] <= mini[i]) stack.pop();
      if (stack.length && stack[stack.length - 1] < nums[i]) return true;
    }
    stack.push(nums[i]);
  }
  return false;
};
