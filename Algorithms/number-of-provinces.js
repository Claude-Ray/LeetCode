/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  let count = 0;
  const visited = [];
  for (let i = 0; i < isConnected.length; i++) {
    if (visited[i]) continue;
    const stack = [i];
    while (stack.length) {
      const city = stack.pop();
      if (visited[city]) continue;
      visited[city] = true;
      for (let j = 0; j < isConnected.length; j++) {
        if (city !== j && isConnected[city][j]) stack.push(j);
      }
    }
    count++;
  }
  return count;
};
