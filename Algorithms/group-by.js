/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function (fn) {
  const map = {};
  for (const n of this) {
    const k = fn(n);
    if (map[k]) map[k].push(n);
    else map[k] = [n];
  }
  return map;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */

/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy2 = function (fn) {
  return this.reduce((map, n) => {
    const k = fn(n);
    if (map[k]) map[k].push(n);
    else map[k] = [n];
    return map;
  }, {});
};
