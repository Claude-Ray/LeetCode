/**
 * @desc Well, this code is `wtf`, but it passed. And I really don't want to clean it,
 * because the first and most important thing is updating it with `Binary Search` later.
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const totalLength = nums1.length + nums2.length;
  const isOdd = totalLength % 2 === 1;
  const medianIndex = isOdd ? (totalLength + 1) / 2 : totalLength / 2;

  if (!nums1.length)
    return getMedian(isOdd, nums2[medianIndex - 1], nums2[medianIndex]);
  if (!nums2.length)
    return getMedian(isOdd, nums1[medianIndex - 1], nums1[medianIndex]);

  let p1 = 0;
  let p2 = 0;
  for (let i = 0; i < medianIndex - 1; i++) {
    if (!nums1[p1])
      return getMedian(isOdd, nums2[medianIndex - p1 - 3], nums2[medianIndex - p1 - 2]);

    if (!nums2[p2])
      return getMedian(isOdd, nums1[medianIndex - p2 - 3], nums1[medianIndex - p2 - 2]);

    if (nums1[p1] <= nums2[p2]) {
      if (p1 + 1 >= nums1.length)
        return medianIndex === i + 2
          ? getMedian(isOdd, nums2[p2], nums2[p2 + 1])
          : getMedian(isOdd, nums2[medianIndex - p1 - 2], nums2[medianIndex - p1 - 1]);
      p1++;
    } else {
      if (p2 + 1 >= nums2.length)
        return medianIndex === i + 2
          ? getMedian(isOdd, nums1[p1], nums1[p1 + 1])
          : getMedian(isOdd, nums1[medianIndex - p2 - 2], nums1[medianIndex - p2 - 1]);
      p2++;
    }
  }

  if (nums1[p1] > nums2[p2 + 1])
    return getMedian(isOdd, nums2[p2], nums2[p2 + 1]);
  if (nums1[p1 + 1] < nums2[p2])
    return getMedian(isOdd, nums1[p1], nums1[p1 + 1]);

  return getMedian(isOdd, nums1[p1], nums2[p2]);
};

function getMedian(isOdd, num1, num2) {
  if (isOdd) {
    if (!num2) return num1;
    return num1 < num2 ? num1 : num2;
  } else {
    return (num1 + num2) / 2;
  }
}