/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
  if (s.length != goal.length) return false;
  const diff = [];
  const sMap = {};
  const goalMap = {};
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) diff.push([s[i], goal[i]]);
    if (diff.length > 2) return false;
    sMap[s[i]] = sMap[s[i]] ? sMap[s[i]] + 1 : 1;
    goalMap[goal[i]] = goalMap[goal[i]] ? goalMap[goal[i]] + 1 : 1;
  }
  if (!diff.length) return Object.values(sMap).some(n => n > 1);
  if (diff.length !== 2) return false;
  return diff[0][1] === diff[1][0] && diff[0][0] === diff[1][1];
};
