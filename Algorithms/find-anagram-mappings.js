/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var anagramMappings = function (nums1, nums2) {
  const map = {};
  for (let i = 0; i < nums2.length; i++) map[nums2[i]] = i;
  return nums1.map(n => map[n]);
};
