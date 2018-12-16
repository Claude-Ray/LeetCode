/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    max = Math.max(max, (right - left) * (Math.min(height[right], height[left])));
    height[left] < height[right] ? left++ : right--;
  }
  return max;
};
