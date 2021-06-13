/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i1 = 0;
  let i2 = 0;
  nums1.length = m;
  while (nums1[i1] !== undefined && i2 < n) {
    if (nums1[i1] >= nums2[i2]) {
      nums1.splice(i1, 0, nums2[i2]);
      i2++;
    } else i1++;
  }
  if (i2 < n) {
    nums1.splice(
      nums1[i1] === undefined ? i1 : i1 + 1,
      0,
      ...nums2.slice(i2, n)
    );
  }
  nums1.length = m + n;
  return nums1;
};
