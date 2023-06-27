/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const pHash = Array(26).fill(0);
  for (let i = 0; i < p.length; i++) {
    const code = p.charCodeAt(i) - 97;
    pHash[code] = pHash[code] + 1 || 1;
  }
  const res = [];
  let length = 0;
  const sHash = Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    const code = s.charCodeAt(i) - 97;
    sHash[code] = sHash[code] + 1 || 1;
    length++;
    if (length > p.length) sHash[s.charCodeAt(i - --length) - 97]--;
    if (length === p.length && sHash.every((n, j) => n === pHash[j]))
      res.push(i - length + 1);
  }
  return res;
};
