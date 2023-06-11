/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function (a, b, c) {
  const [ba, bb, bc] = [a, b, c].map(s => s.toString(2).split('').reverse());
  const len = Math.max(ba.length, bb.length, bc.length);
  let count = 0;
  for (let i = 0; i < len; i++) {
    if (+bc[i]) {
      if (!+ba[i] && !+bb[i]) count++;
    } else {
      if (+ba[i]) count++;
      if (+bb[i]) count++;
    }
  }
  return count;
};

var minFlips2 = function (a, b, c) {
  let count = 0;
  while (a || b || c) {
    ba = a % 2;
    bb = b % 2;
    bc = c % 2;
    if (bc) {
      if (!ba && !bb) count++;
    } else {
      count += ba + bb;
    }
    a = Math.floor(a / 2);
    b = Math.floor(b / 2);
    c = Math.floor(c / 2);
  }
  return count;
};
