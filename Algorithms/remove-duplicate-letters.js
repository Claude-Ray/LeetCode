/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  const map = {};
  const visited = {};
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) map[s[i]]++;
    else map[s[i]] = 1;
  }

  let result = [];
  for (let i = 0; i < s.length; i++) {
    map[s[i]]--;
    if (visited[s[i]]) continue;
    do {
      const tail = result[result.length - 1];
      if (!(map[tail] && tail > s[i])) break;
      result.pop();
      visited[tail] = 0;
    } while (result.length);
    result.push(s[i]);
    visited[s[i]] = 1;
  }
  return result.join('');
};
