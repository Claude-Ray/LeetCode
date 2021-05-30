/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const map1 = {};
  for (let i = 0; i < nums1.length; i++) map1[nums1[i]] = 1;
  const map2 = {};
  for (let i = 0; i < nums2.length; i++) {
    if (map1[nums2[i]] !== undefined) {
      for (let j = i + 1; j < nums2.length; j++) {
        if (nums2[i] < nums2[j]) {
          map2[nums2[i]] = nums2[j];
          break;
        }
      }
      if (map2[nums2[i]] === undefined) map2[nums2[i]] = -1;
    }
  }
  return nums1.map(n => map2[n]);
};
