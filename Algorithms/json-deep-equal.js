/**
 * @param {any} o1
 * @param {any} o2
 * @return {boolean}
 */
var areDeeplyEqual = function (o1, o2) {
  if (o1 === o2) return true;
  if (typeof o1 !== typeof o2) return false;
  if (typeof o1 === 'string' || typeof o1 === 'number') return false;
  if (!o1 || !o2) return false;
  if (
    (Array.isArray(o1) && !Array.isArray(o2)) ||
    (!Array.isArray(o1) && Array.isArray(o2))
  )
    return false;
  if (Array.isArray(o1) && Array.isArray(o2)) {
    return (
      o1.length === o2.length && o1.every((n, i) => areDeeplyEqual(n, o2[i]))
    );
  }
  if (typeof o1 === 'object' && typeof o2 === 'object') {
    const o1Keys = Object.keys(o1);
    const o2Keys = Object.keys(o2);
    return (
      o1Keys.length === o2Keys.length &&
      o1Keys.every(k => areDeeplyEqual(o1[k], o2[k]))
    );
  }
  return false;
};
