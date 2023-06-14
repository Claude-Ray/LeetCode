/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function (arrays) {
  let max = Number.MIN_SAFE_INTEGER;
  let min = Number.MAX_SAFE_INTEGER;
  let maxIndex, minIndex;
  for (let i = 0; i < arrays.length; i++) {
    if (last(arrays[i]) > max) {
      maxIndex = i;
      max = last(arrays[i]);
    }
    if (arrays[i][0] < min) {
      minIndex = i;
      min = arrays[i][0];
    }
  }
  if (maxIndex !== minIndex) return max - min;

  let nmin = Number.MAX_SAFE_INTEGER;
  let nmax = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < arrays.length; i++) {
    if (i === maxIndex) continue;
    nmin = Math.min(arrays[i][0], nmin);
    nmax = Math.max(last(arrays[i]), nmax);
  }
  return Math.max(nmax - min, max - nmin);
};

function last(arr) {
  return arr[arr.length - 1];
}
