/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const set3 = new Set(nums3);
  const result = new Set();
  for (const n of set2) set1.has(n) ? result.add(n) : set1.add(n);
  for (const n of set3) set1.has(n) && result.add(n);
  return [...result.values()];
};
