/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  if (people.length <= 1) return people;
  people = people.sort((a, b) => (a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]));
  const result = [people.pop()];
  while (people.length) {
    const p = people.pop();
    if (p[0] === result[result.length - 1][0]) {
      result.push(p);
    } else if (p[1] === 0) {
      result.unshift(p);
    } else {
      result.splice(p[1], 0, p);
    }
  }
  return result;
};
