/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle === '') return 0;
  let i = -1;
  const len = needle.length;
  while (++i < haystack.length) {
    if (haystack[i] === needle[0])
      if (haystack.substr(i, len) === needle) return i;
  }
  return -1;
};

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr2 = function (haystack, needle) {
  return haystack.indexOf(needle);
};
