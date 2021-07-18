/**
 * @param {number[][]} adjacentPairs
 * @return {number[]}
 */
var restoreArray = function (adjacentPairs) {
  const map1 = {};
  const map2 = {};
  const countMap = {};
  for (const [u, v] of adjacentPairs) {
    if (map1[u] === undefined) {
      map1[u] = v;
    } else {
      map2[u] = v;
    }
    if (map1[v] === undefined) {
      map1[v] = u;
    } else {
      map2[v] = u;
    }
    countMap[u] = countMap[u] ? ++countMap[u] : 1;
    countMap[v] = countMap[v] ? ++countMap[v] : 1;
  }
  let head;
  for (const n in countMap) {
    if (countMap[n] === 1) {
      head = +n;
      break;
    }
  }
  const visited = { [head]: true };
  const result = [head];
  for (let i = 0; i < adjacentPairs.length; i++) {
    head = visited[map1[head]] ? map2[head] : map1[head];
    visited[head] = true;
    result.push(head);
  }
  return result;
};
