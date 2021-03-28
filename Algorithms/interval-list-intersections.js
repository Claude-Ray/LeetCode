/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function (firstList, secondList) {
  const result = [];
  let i = 0;
  let j = 0;
  while (i < firstList.length && j < secondList.length) {
    if (firstList[i][1] < secondList[j][0]) {
      i++;
      continue;
    }
    if (firstList[i][0] > secondList[j][1]) {
      j++;
      continue;
    }
    result.push([
      Math.max(firstList[i][0], secondList[j][0]),
      Math.min(firstList[i][1], secondList[j][1]),
    ]);

    if (firstList[i][1] < secondList[j][1]) {
      i++;
    } else if (firstList[i][1] > secondList[j][1]) {
      j++;
    } else {
      i++;
      j++;
    }
  }
  return result;
};
