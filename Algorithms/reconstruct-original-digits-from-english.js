/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function (s) {
  if (!s) return '';
  let length = s.length;
  const map = {};
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) map[s[i]]++;
    else map[s[i]] = 1;
  }
  const output = Array(10).fill(0);
  const digits = [
    ['z', [], 0],
    ['x', [], 6],
    ['w', [], 2],
    ['u', [], 4],
    ['o', [0, 2, 4], 1],
    ['r', [0, 4], 3],
    ['f', [4], 5],
    ['s', [6], 7],
    ['t', [2, 3], 8],
    ['i', [6, 5, 8], 9],
  ];
  digits.forEach(item => {
    if (map[item[0]]) {
      output[item[2]] = map[item[0]];
      for (let i = 0; i < item[1].length; i++) {
        output[item[2]] -= output[item[1][i]];
      }
    }
  });
  const result = [];
  for (let i = 0; i < output.length; i++) {
    for (let j = 0; j < output[i]; j++) {
      result.push(i);
    }
  }
  return result.join('');
};

var originalDigits2 = function (s) {
  if (!s) return '';
  let length = s.length;
  const map = {};
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) map[s[i]]++;
    else map[s[i]] = 1;
  }
  const result = [];
  const digits = [
    ['z', 'zero', 0],
    ['x', 'six', 6],
    ['w', 'two', 2],
    ['u', 'four', 4],
    ['o', 'one', 1],
    ['r', 'three', 3],
    ['f', 'five', 5],
    ['s', 'seven', 7],
    ['t', 'eight', 8],
    ['i', 'nine', 9],
  ];
  digits.forEach(item => {
    while (map[item[0]]) {
      item[1].split('').forEach(c => map[c]--);
      result.push(item[2]);
    }
  });
  return result.sort().join('');
};
