/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  if (!(chars && chars.length)) return 0;
  let length = 0;
  let lastChar = chars[0];
  let lastCount = 1;
  for (let i = 1; i <= chars.length; i++) {
    if (chars[i] !== lastChar) {
      chars[length++] = lastChar;
      lastChar = chars[i];
      if (lastCount > 1) {
        if (lastCount <= 9) {
          chars[length++] = lastCount + '';
        } else {
          lastCount
            .toString()
            .split('')
            .forEach(count => {
              chars[length++] = count;
            });
        }
      }
      lastCount = 1;
    } else {
      lastCount++;
    }
  }
  if (lastCount !== 1) {
    chars[length++] = lastCount + '';
  }
  chars.length = length;
  return length;
};
