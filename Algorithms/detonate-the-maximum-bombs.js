/**
 * @param {number[][]} bombs
 * @return {number}
 */
var maximumDetonation = function (bombs) {
  const stack = [];
  const checked = new Set();
  let result = 1;
  const squareMap = {};

  for (let i = 0; i < bombs.length; i++) {
    if (checked.has(i)) continue;

    stack.push(bombs[i]);
    checked.add(i);
    const visited = new Set([i]);

    while (stack.length) {
      const bomb = stack.pop();
      if (!squareMap[bomb[2]]) squareMap[bomb[2]] = bomb[2] ** 2;

      for (let j = 0; j < bombs.length; j++) {
        if (visited.has(j)) continue;
        const distance =
          (bomb[0] - bombs[j][0]) ** 2 + (bomb[1] - bombs[j][1]) ** 2;
        if (distance <= squareMap[bomb[2]]) {
          stack.push(bombs[j]);
          visited.add(j);
          checked.add(j);
        }
      }
    }
    result = Math.max(result, visited.size);
  }

  return result;
};
