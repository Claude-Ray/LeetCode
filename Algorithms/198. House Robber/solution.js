/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let a = 0;
  let b = 0;
  for (let i = 0; i < nums.length; i++)
    i % 2 === 0
      ? a = Math.max(a + nums[i], b)
      : b = Math.max(b + nums[i], a);
  return Math.max(a, b);
};
