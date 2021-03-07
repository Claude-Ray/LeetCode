/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  let index = 0;
  const arr = citations.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    let h = arr.length - i;
    if (h <= arr[i]) return (index = h);
  }
  return index;
};
