/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function (tasks) {
  const map = {};
  let round = 0;
  for (const task of tasks) {
    map[task] = map[task] ? ++map[task] : 1;
  }
  for (const task in map) {
    const count = map[task];
    if (count === 1) return -1;
    round += Math.ceil(count / 3);
  }
  return round;
};
