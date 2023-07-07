/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function (answerKey, k) {
  let t = 0;
  let f = 0;
  let start = 0;
  let max = 0;
  for (let i = 0; i < answerKey.length; i++) {
    if (answerKey[i] === 'T') t++;
    else f++;
    while (t > k && f > k) {
      if (answerKey[start++] === 'T') t--;
      else f--;
    }
    max = Math.max(max, i - start + 1);
  }
  return max;
};

/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers2 = function (answerKey, k) {
  function counter(flag) {
    let max = 0;
    let count = 0;
    const pos = [-1];
    for (let i = 0; i < answerKey.length; i++) {
      count++;
      if (answerKey[i] !== flag) {
        pos.push(i);
        if (pos.length > k + 1) {
          const j = pos.shift();
          count -= pos[0] - j;
        }
      }
      max = Math.max(max, count);
    }
    return max;
  }

  return Math.max(counter('T'), counter('F'));
};
