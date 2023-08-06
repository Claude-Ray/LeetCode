/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  if (k === 1) return nums;
  const queue = [];
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    while (queue.length && queue[queue.length - 1].v < nums[i]) queue.pop();
    queue.push({ v: nums[i], i });
    if (i >= k - 1 || i === nums.length - 1) result.push(queue[0].v);
    if (queue[0].i + k === i + 1) queue.shift();
  }
  return result;
};
