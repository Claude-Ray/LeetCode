/**
 * @desc `isNaN(Infinity)` returns `false`.
 * Try `Number.isFinite` when someone thinks `Infinity` is `Not a Number`.
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
  return !(isNaN(s) || s.trim() === '');
};