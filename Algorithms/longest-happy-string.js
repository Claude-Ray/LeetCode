/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function (a, b, c) {
  const arr = [
    { k: 'a', v: a, c: 0 },
    { k: 'b', v: b, c: 0 },
    { k: 'c', v: c, c: 0 },
  ].sort((a, b) => b.v - a.v);
  let res = '';
  while (arr[0].v > 0) {
    if (arr[0].c < 2) {
      res += arr[0].k;
      arr[0].c++;
      arr[0].v--;
      arr[1].c = 0;
      arr[2].c = 0;
    } else if (arr[1].v) {
      res += arr[1].k;
      arr[1].c++;
      arr[1].v--;
      arr[0].c = 0;
      arr[2].c = 0;
    } else {
      break;
    }
    arr.sort((a, b) => b.v - a.v);
  }
  return res;
};
