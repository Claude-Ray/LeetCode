/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if (num1 === '0' || num2 === '0') return '0';
  const arr1 = num1.split('');
  const arr2 = num2.split('');
  const res = [];
  let pos;
  for (let i = arr1.length - 1; i >= 0; i--) {
    pos = i + arr2.length;
    for (let j = arr2.length - 1; j >= 0; j--)
      add(res, arr1[i] * arr2[j], pos--);
  }
  return res.join('');
};

/**
 * add number to byte array
 * @param {number[]} arr
 * @param {string|number} num
 * @param {number} index
 */
function add(arr, num, index) {
  const sum = (+arr[index] || 0) + +num;
  arr[index] = sum % 10;
  if (sum >= 10) add(arr, Math.floor(sum / 10), index - 1);
}
