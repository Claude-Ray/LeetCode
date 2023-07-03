/**
 * @param {any} object
 * @return {string}
 */
var jsonStringify = function (object) {
  if (object === null) return 'null';
  if (typeof object === 'string') return `"${object}"`;
  if (Array.isArray(object)) return `[${object.map(jsonStringify).join()}]`;
  if (typeof object === 'object') {
    const res = [];
    for (const key in object) {
      res.push(`"${key}":${jsonStringify(object[key])}`);
    }
    return `{${res.join()}}`;
  }
  return `${object}`;
};
