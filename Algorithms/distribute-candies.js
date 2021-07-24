/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
  const types = new Set(candyType);
  return Math.min(candyType.length / 2, types.size);
};
