/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  const arr = nums.sort((a, b) => a - b);
  const len = nums.length;
  const result = [];
  for (let i = 0; i < len - 3; i++) {
    if (arr[i] === arr[i - 1] && i > 0) continue;
    for (let j = i + 1; j < len - 2; j++) {
      if (arr[j] === arr[j - 1] && j > i + 1) continue;
      for (let k = j + 1; k < len - 1; k++) {
        if (arr[k] === arr[k - 1] && k > j + 1) continue;
        for (let l = k + 1; l < len; l++) {
          if (arr[l] === arr[l - 1] && l > k + 1) continue;
          const sum = arr[i] + arr[j] + arr[k] + arr[l];
          if (sum === target) {
            result.push([arr[i], arr[j], arr[k], arr[l]]);
          }
        }
      }
    }
  }
  return result;
};
