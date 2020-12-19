/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  const arr = nums.sort((a, b) => a - b);
  const length = nums.length;
  let result;
  let diff;
  for (let i = 0; i < length - 2; i++) {
    let head = i + 1;
    let tail = length - 1;
    while (head < tail) {
      const temp = arr[i] + arr[head] + arr[tail];
      const tempDiff = Math.abs(target - temp);
      if (diff === undefined || tempDiff < diff) {
        diff = tempDiff;
        result = temp;
      }
      if (temp > target) tail--;
      else if (temp < target) head++;
      else return temp;
    }
  }
  return result;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest2 = function (nums, target) {
  const arr = nums.sort((a, b) => a - b);
  const length = nums.length;
  let result;
  let diff;
  for (let i = 0; i < length - 2; i++) {
    for (let j = i + 1; j < length - 1; j++) {
      for (let k = j + 1; k < length; k++) {
        const temp = arr[i] + arr[j] + arr[k];
        const tempDiff = Math.abs(target - temp);
        if (result === undefined) {
          diff = tempDiff;
          result = temp;
          continue;
        }
        if (tempDiff < diff) {
          diff = tempDiff;
          result = temp;
        }
        if (temp > target) {
          break;
        }
      }
    }
  }
  return result;
};
