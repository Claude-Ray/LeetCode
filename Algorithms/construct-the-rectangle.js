/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function (area) {
  for (let i = Math.ceil(Math.sqrt(area)); i <= area; i++) {
    if (!(area % i)) return [i, area / i];
  }
};
