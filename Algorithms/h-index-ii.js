/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  let index = 0;
  let left = 0;
  let right = citations.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const h = citations.length - mid;
    if (citations[mid] === h) return h;
    if (citations[mid] > h) {
      index = h;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return index;
};
