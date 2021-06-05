/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
  let degree = 0;
  let degreeNums = [];
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      map[nums[i]].push(i);
    } else {
      map[nums[i]] = [i];
    }
    if (map[nums[i]].length > degree) {
      degree = map[nums[i]].length;
      degreeNums = [nums[i]];
    } else if (map[nums[i]].length === degree) {
      degreeNums.push(nums[i]);
    }
  }
  let result = Number.MAX_SAFE_INTEGER;
  for (const num of degreeNums) {
    const diff = map[num][map[num].length - 1] - map[num][0] + 1;
    if (diff < result) {
      result = diff;
    }
  }
  return result;
};
