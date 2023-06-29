/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let l = 0;
  let r = height.length - 1;
  let leftMax = height[l];
  let rightMax = height[r];
  let count = 0;
  while (l < r) {
    if (leftMax < rightMax) {
      l++;
      leftMax = Math.max(leftMax, height[l]);
      count += leftMax - height[l];
    } else {
      r--;
      rightMax = Math.max(rightMax, height[r]);
      count += rightMax - height[r];
    }
  }
  return count;
};

/**
 * @param {number[]} height
 * @return {number}
 */
var trap2 = function (height) {
  if (height.length < 2) return 0;
  let last = 0;
  let bar = 0;
  let count = 0;
  for (let i = 1; i < height.length; i++) {
    if (height[i] >= height[last]) {
      count += height[last] * (i - last - 1) - bar;
      last = i;
      bar = 0;
    } else {
      bar += height[i];
    }
  }
  last = height.length - 1;
  bar = 0;
  for (let i = height.length - 2; i >= 0; i--) {
    if (height[i] > height[last]) {
      count += height[last] * (last - i - 1) - bar;
      last = i;
      bar = 0;
    } else {
      bar += height[i];
    }
  }
  return count;
};
