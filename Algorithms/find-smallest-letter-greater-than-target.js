/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  const len = letters.length - 1;
  if (letters[len] <= target || letters[0] > target) {
    return letters[0];
  }

  let left = 0;
  let right = len;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (letters[mid] <= target) {
      if (letters[mid + 1] > target) {
        return letters[mid + 1];
      }
      left = mid + 1;
    } else if (letters[mid] > target) {
      if (letters[mid - 1] <= target) {
        return letters[mid];
      }
      right = mid - 1;
    }
  }
  return letters[0];
};
