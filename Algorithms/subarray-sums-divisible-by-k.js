/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function (nums, k) {
  const map = [1];
  let sum = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = (sum + nums[i]) % k;
    if (sum < 0) sum += k;
    if (map[sum]) count += map[sum]++;
    else map[sum] = 1;
  }
  return count;
};
