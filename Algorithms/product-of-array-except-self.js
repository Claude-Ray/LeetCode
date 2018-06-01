/**
 * @desc Construct two arrays
 * [1, a, ab, abc]
 * [bcd, cd, d, 1]
 * `unshift` is much more slower than `push`
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const arr1 = nums.reduce((pre, cur, i) => pre.push(pre[i] * cur) && pre, [1]).slice(0, nums.length);
  // const arr2 = nums.reduceRight((pre, cur, i) => pre.unshift(pre[0] * cur) && pre, [1]).slice(1);
  const arr2 = nums.reduceRight((pre, cur, i) => pre.push(pre[pre.length - 1] * cur) && pre, [1]).reverse().slice(1);
  return arr1.map((n, i) => n * arr2[i]);
};

/**
 * @desc Construct one array (faster)
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf2 = function (nums) {
  const arr = nums.reduce((pre, cur, i) => pre.push(pre[i] * cur) && pre, [1]);
  const result = [arr[nums.length - 1]];
  let p = 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    p *= nums[i + 1];
    result.push(p * arr[i]);
  }
  return result.reverse();
};