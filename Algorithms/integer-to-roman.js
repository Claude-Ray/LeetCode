/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const symbols = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
  let roman = '';
  let index = 0;
  while (num > 0) {
    const n = num % 10;
    num = Math.floor(num / 10);
    let r = '';
    if (n === 1) r = symbols[index];
    else if (n === 2) r = symbols[index] + symbols[index];
    else if (n === 3) r = symbols[index] + symbols[index] + symbols[index];
    else if (n === 4) r = symbols[index] + symbols[index + 1];
    else if (n === 5) r = symbols[index + 1];
    else if (n === 6) r = symbols[index + 1] + symbols[index];
    else if (n === 7) r = symbols[index + 1] + symbols[index] + symbols[index];
    else if (n === 8) r = symbols[index + 1] + symbols[index] + symbols[index] + symbols[index];
    else if (n === 9) r = symbols[index] + symbols[index + 2];

    roman = r + roman;
    index += 2;
  }
  return roman;
};

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman2 = function (num) {
  const map = {
    1000: 'M',
    900: 'CM',
    500: 'D',
    400: 'CD',
    100: 'C',
    90: 'XC',
    50: 'L',
    40: 'XL',
    10: 'X',
    9: 'IX',
    5: 'V',
    4: 'IV',
    1: 'I'
  };
  return Object.keys(map).sort((a, b) => b - a).map(value => {
    const r = map[value].repeat(Math.floor(num / value));
    num = num % value;
    return r;
  }).join('');
};
