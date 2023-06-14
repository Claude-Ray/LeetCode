/**
 * @param {string} source
 * @param {string} target
 * @return {number}
 */
var shortestWay = function (source, target) {
  let count = 0;
  for (let i = 0; i < target.length; i++) {
    let j = 0;
    let moved = false;
    while (j < source.length) {
      if (source[j++] === target[i]) {
        i++;
        moved = true;
      }
    }
    if (!moved) return -1;
    i--;
    count++;
  }
  return count;
};
