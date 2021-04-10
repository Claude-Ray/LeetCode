/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let result = '';
  let flag = 0;
  let len = num1.length;
  if (num1.length < num2.length) {
    len = num2.length;
    num1 = Array(num2.length - num1.length).fill('0').join('') + num1;
  } else if (num1.length > num2.length) {
    num2 = Array(num1.length - num2.length).fill('0').join('') + num2;
  }
  for (let i = len - 1; i >= 0; i--) {
    const num = (+num1[i] || 0) + (+num2[i] || 0) + flag;
    flag = num >= 10 ? 1 : 0;
    result = (num % 10) + result;
  }
  return flag ? flag + result : result;
};
