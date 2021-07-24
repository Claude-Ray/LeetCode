/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  const map = {};
  arr.sort((a, b) => (a < 0 && b < 0 ? b - a : a - b));
  for (const n of arr) {
    if (n % 2 === 0 && map[n / 2]) return true;
    map[n] = true;
  }
  return false;
};
