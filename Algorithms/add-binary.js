/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let result = '';
  let sum = 0;
  while (a.length && b.length) {
    sum += +a[a.length - 1] + +b[b.length - 1];
    result = (sum % 2 ? '1' : '0') + result;
    sum = sum > 1 ? 1 : 0;
    a = a.slice(0, -1);
    b = b.slice(0, -1);
  }

  let rest = a.length ? a : b;

  while (rest.length) {
    if (!sum) return rest + result;
    sum += +rest[rest.length - 1];
    result = (sum % 2 ? '1' : '0') + result;
    sum = sum > 1 ? 1 : 0;
    rest = rest.slice(0, -1);
  }
  return sum ? '1' + result : result;
};
