/**
 * @param {number[]} nums
 * @return {number}
 */
var longestArithSeqLength = function (nums) {
  const dp = Array(nums.length)
    .fill()
    .map(() => ({}));
  let count = 0;
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      const diff = nums[i] - nums[j];
      dp[i][diff] = dp[j][diff] ? dp[j][diff] + 1 : 1;
      count = Math.max(count, dp[i][diff]);
    }
  }
  return count + 1;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestArithSeqLength2 = function (nums) {
  const arr = Array(nums.length - 1)
    .fill()
    .map(() => []);
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      arr[i][j] = nums[i] - nums[j];
    }
  }

  let maxCount = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const diff = arr[i][j];
      let count = 2;
      let index = j;
      while (index < nums.length) {
        let found = false;
        for (let k = index + 1; k < nums.length; k++) {
          if (arr[index][k] === diff) {
            index = k;
            count++;
            found = true;
            break;
          }
        }
        if (!found) break;
      }
      maxCount = Math.max(maxCount, count);
    }
  }
  return maxCount;
};
