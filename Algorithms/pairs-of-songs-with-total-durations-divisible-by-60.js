/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function (time) {
  const pairsMap = {};
  let count = 0;
  for (let i = 0; i < time.length; i++) {
    const r = time[i] % 60;
    const t = r === 0 && time[1] ? 60 : r;
    count += pairsMap[60 - r] || 0;
    pairsMap[t] = pairsMap[t] ? pairsMap[t] + 1 : 1;
  }
  return count;
};
