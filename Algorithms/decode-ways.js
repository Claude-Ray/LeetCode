/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  if (!s || !+s[0]) return 0;

  let preCount = 1;
  let curCount = 1;
  for (let i = 0; i < s.length - 1; i++) {
    const current = curCount;

    if (s[i + 1] === '0') curCount = 0;

    if (s[i] === '1' || (s[i] === '2' && s[i + 1] <= 6))
      curCount += preCount;

    preCount = current;

    if (preCount === 0) return 0;
  }
  return curCount;
};