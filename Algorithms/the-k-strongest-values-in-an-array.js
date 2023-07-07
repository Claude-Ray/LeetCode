/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getStrongest = function (arr, k) {
  const result = [];
  arr.sort((a, b) => a - b);
  const m = arr[Math.floor((arr.length - 1) / 2)];
  let l = 0;
  let r = arr.length - 1;
  let ls = Math.abs(arr[l] - m);
  let rs = Math.abs(arr[r] - m);
  for (let i = 0; i < k && l <= r; i++) {
    if (ls > rs) {
      result.push(arr[l]);
      ls = Math.abs(arr[++l] - m);
    } else {
      result.push(arr[r]);
      rs = Math.abs(arr[--r] - m);
    }
  }
  return result;
};
