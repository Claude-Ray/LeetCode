/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
var stringShift = function (s, shift) {
  let count = 0;
  for (let i = 0; i < shift.length; i++)
    count += shift[i][0] === 0 ? shift[i][1] : -shift[i][1];
  count %= s.length;
  return s.slice(count) + s.slice(0, count);
};
