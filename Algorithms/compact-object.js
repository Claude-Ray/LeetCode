/**
 * @param {Object} obj
 * @return {Object}
 */
var compactObject = function (obj) {
  if (Array.isArray(obj)) {
    return obj
      .filter(Boolean)
      .map(item => (typeof item === 'object' ? compactObject(item) : item));
  }

  const res = {};
  for (const key in obj) {
    if (!obj[key]) continue;
    res[key] =
      typeof obj[key] === 'object' ? compactObject(obj[key]) : obj[key];
  }
  return res;
};
