/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  const nums = [];
  for (let i = left; i <= right; i++) {
    if (i < 10) {
      nums.push(i);
    } else {
      const unmatch = i.toString().split('').some(num => +num === 0 || i % num > 0);
      if (!unmatch)
        nums.push(i);
    }
  }
  return nums;
};