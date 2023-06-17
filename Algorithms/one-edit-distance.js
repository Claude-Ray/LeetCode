/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function (s, t) {
  if (Math.abs(s.length - t.length) > 1) return false;
  const len = Math.max(s.length, t.length);
  for (let i = 0; i < len; i++) {
    if (s[i] !== t[i]) {
      if (s.length < t.length) return s.slice(i) === t.slice(i + 1);
      if (s.length > t.length) return s.slice(i + 1) === t.slice(i);
      return s.slice(i + 1) === t.slice(i + 1);
    }
  }
  return false;
};
