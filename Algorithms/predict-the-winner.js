/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function (nums) {
  return gameA(nums, 0, 0);
};

function gameA(nums, A, B) {
  if (nums.length === 1) {
    return A + nums[0] >= B;
  }
  return (
    gameB(nums.slice(1), A + nums[0], B) ||
    gameB(nums.slice(0, nums.length - 1), A + nums[nums.length - 1], B)
  );
}

function gameB(nums, A, B) {
  if (nums.length === 1) {
    return B + nums[0] <= A;
  }
  return (
    gameA(nums.slice(1), A, B + nums[0]) &&
    gameA(nums.slice(0, nums.length - 1), A, B + nums[nums.length - 1])
  );
}
