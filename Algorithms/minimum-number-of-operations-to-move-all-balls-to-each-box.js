/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
  boxes = boxes.split('');
  return boxes.map((_, i) =>
    boxes.reduce(
      (sum, cur, j) => (cur === '1' ? sum + Math.abs(j - i) : sum),
      0
    )
  );
};
