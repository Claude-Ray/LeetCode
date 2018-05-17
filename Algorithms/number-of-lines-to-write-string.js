/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
var numberOfLines = function (widths, S) {
  if (!S) return [0, 0];
  const letterMap = {
    a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9,
    k: 10, l: 11, m: 12, n: 13, o: 14, p: 15, q: 16, r: 17,
    s: 18, t: 19, u: 20, v: 21, w: 22, x: 23, y: 24, z: 25
  };
  let lines = 1;
  let lastLineWidth = 0;
  for (const char of S.split('')) {
    const width = widths[letterMap[char]];
    if (lastLineWidth + width > 100) {
      lines++;
      lastLineWidth = width;
    } else {
      lastLineWidth += width;
    }
  }
  return [lines, lastLineWidth];
};