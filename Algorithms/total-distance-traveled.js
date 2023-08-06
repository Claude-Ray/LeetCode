/**
 * @param {number} mainTank
 * @param {number} additionalTank
 * @return {number}
 */
var distanceTraveled = function (mainTank, additionalTank) {
  let count = 0;
  while (mainTank >= 5) {
    count += mainTank - (mainTank % 5);
    const add = Math.min(additionalTank, Math.floor(mainTank / 5));
    additionalTank -= add;
    mainTank = (mainTank % 5) + add;
  }
  return (mainTank + count) * 10;
};
