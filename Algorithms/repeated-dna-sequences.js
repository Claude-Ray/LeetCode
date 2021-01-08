/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  if (s.length < 10) return [];
  const map = {};
  const result = {};
  for (let i = 10; i <= s.length; i++) {
    const sub = s.slice(i - 10, i);
    if (map[sub]) result[sub] = 1;
    else map[sub] = 1;
  }
  return Object.keys(result);
};
