/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
  const queue = new MinPriorityQueue();
  for (let i = 0; i < Math.min(nums1.length, k); i++)
    queue.enqueue([i, 0], nums1[i] + nums2[0]);
  const result = [];
  while (k-- && queue.size()) {
    const [i, j] = queue.dequeue().element;
    result.push([nums1[i], nums2[j]]);
    if (j < nums2.length - 1) {
      queue.enqueue([i, j + 1], nums1[i] + nums2[j + 1]);
    }
  }
  return result;
};
