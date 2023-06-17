/**
 * @param {number[]} nums
 * @return {number}
 */
var numOfWays = function (nums) {
  return Number(count(nums)) - 1;
};

function count(nums) {
  if (nums.length <= 2) return 1n;
  const left = nums.filter(n => n < nums[0]);
  const right = nums.filter(n => n > nums[0]);
  return (
    (comb(nums.length - 1, left.length) * count(left) * count(right)) %
    BigInt(1e9 + 7)
  );
}

const fact = [1n];
function comb(n, k) {
  if (k === 0) return 1n;
  for (let i = fact.length; i <= n; i++) fact[i] = fact[i - 1] * BigInt(i);
  return fact[n] / (fact[k] * fact[n - k]);
}
