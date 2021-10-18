/**
 * @param {string[]} nums
 * @param {string} target
 * @return {number}
 */
var numOfPairs = function (nums, target) {
  const map = {};
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      count += map[nums[i]];
      continue;
    }
    const temp = {};
    for (let j = 0; j < nums.length; j++) {
      if (i === j) continue;
      if (temp[nums[j]]) {
        ++map[nums[i]];
        continue;
      }
      if (nums[i] + nums[j] === target) {
        map[nums[i]] = map[nums[i]] ? ++map[nums[i]] : 1;
        temp[nums[j]] = true;
      }
    }
    if (map[nums[i]]) count += map[nums[i]];
  }
  return count;
};
