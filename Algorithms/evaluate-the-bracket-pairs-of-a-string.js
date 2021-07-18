/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function (s, knowledge) {
  const map = {};
  for (const [k, v] of knowledge) map[k] = v;
  return s
    .split('(')
    .map((str, i) => {
      if (i === 0) return str;
      const [key, ...other] = str.split(')');
      return [map[key] || '?', ...other].join('');
    })
    .join('');
};
