/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const vowelSet = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  const indexList = [];
  const reversedVowelList = [];
  for (let i = 0; i < s.length; i++) {
    if (vowelSet.has(s[i])) {
      indexList.push(i);
      reversedVowelList.unshift(s[i]);
    }
  }
  const result = s.split('');
  for (let i = 0; i < indexList.length; i++) {
    result[indexList[i]] = reversedVowelList[i];
  }
  return result.join('');
};
