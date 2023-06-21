/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  if (!n) return true;
  let count = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      if (flowerbed[i + 1]) {
        i += 2;
      } else {
        if (++count >= n) return true;
        i++;
      }
    } else {
      i++;
    }
  }
  return false;
};
