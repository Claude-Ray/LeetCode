/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  const duplicates = {};
  const individual = {};
  for (const num of nums) {
    if (individual[num])
      duplicates[num] = num;
    else
      individual[num] = 1;
  }
  return Object.values(duplicates);
};