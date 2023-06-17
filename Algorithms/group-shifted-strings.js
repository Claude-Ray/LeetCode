/**
 * @param {string[]} strings
 * @return {string[][]}
 */
var groupStrings = function (strings) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const map = {};
  for (let i = 0; i < alphabet.length; i++) map[alphabet[i]] = i;
  const result = {};
  for (const str of strings) {
    let code = '';
    for (let i = 1; i < str.length; i++) {
      let index = map[str[i]] - map[str[0]];
      if (index < 0) index += alphabet.length;
      code += alphabet[index];
    }
    if (result[code]) result[code].push(str);
    else result[code] = [str];
  }
  return Object.values(result);
};
