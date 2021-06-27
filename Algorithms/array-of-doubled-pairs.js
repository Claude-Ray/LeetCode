/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canReorderDoubled = function (arr) {
  arr = arr.sort((a, b) => (a < 0 && b < 0 ? b - a : a - b));
  const map = {};
  for (const n of arr) {
    if (n % 2 === 0) {
      const m = n / 2;
      if (map[m]) {
        if (!--map[m]) delete map[m];
        continue;
      }
    }
    map[n] = map[n] ? map[n] + 1 : 1;
  }
  return !Object.keys(map).length;
};
