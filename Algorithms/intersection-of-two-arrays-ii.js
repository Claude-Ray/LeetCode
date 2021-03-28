/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const map1 = {};
  for (let i = 0; i < nums1.length; i++) {
    if (!map1[nums1[i]]) map1[nums1[i]] = 1;
    else map1[nums1[i]]++;
  }
  const result = [];
  for (let i = 0; i < nums2.length; i++) {
    if (map1[nums2[i]]) {
      result.push(nums2[i]);
      map1[nums2[i]]--;
    }
  }
  return result;
};
