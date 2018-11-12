/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = {};
  for (const str of strs) {
    const key = str.split('').sort().join('');
    if (map[key]) {
      map[key].push(str);
    } else {
      map[key] = [str];
    }
  }
  return Object.values(map);
};
