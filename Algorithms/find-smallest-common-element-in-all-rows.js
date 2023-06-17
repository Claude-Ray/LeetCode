/**
 * @param {number[][]} mat
 * @return {number}
 */
var smallestCommonElement = function (mat) {
  const map = {};
  for (const row of mat) for (const n of row) map[n] = map[n] ? map[n] + 1 : 1;
  const commonElements = Object.keys(map).filter(n => map[n] === mat.length);
  return commonElements.length ? Math.min(...commonElements) : -1;
};
