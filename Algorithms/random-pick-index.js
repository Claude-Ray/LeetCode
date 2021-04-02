/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) map[nums[i]] = [i];
    else map[nums[i]].push(i);
  }
  this.map = map;
};

/**
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function (target) {
  const indexes = this.map[target];
  if (indexes.length === 1) return indexes[0];
  return indexes[random(indexes.length)];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */

function random(n) {
  return Math.floor(Math.random() * n);
}
