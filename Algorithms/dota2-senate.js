/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
  const nameMap = { R: 'Radiant', D: 'Dire' };
  const banMap = { R: 0, D: 0 };
  let announceR, announceD;
  do {
    announceR = 0;
    announceD = 0;
    let nextRound = '';
    for (const s of senate) {
      if (s === 'R') {
        if (banMap.R > 0) {
          banMap.R--;
        } else {
          nextRound += s;
          announceR++;
          banMap.D++;
        }
      } else {
        if (banMap.D > 0) {
          banMap.D--;
        } else {
          nextRound += s;
          announceD++;
          banMap.R++;
        }
      }
    }
    senate = nextRound;
  } while (announceR && announceD);
  return announceR ? nameMap.R : nameMap.D;
};
