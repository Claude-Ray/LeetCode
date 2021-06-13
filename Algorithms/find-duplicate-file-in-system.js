/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function (paths) {
  const contentMap = {};
  paths.forEach(p => {
    p.split(' ')
      .map((f, i, arr) => `${arr[0]}/${f}`)
      .slice(1)
      .map(f => {
        const [fpath, content] = f.split('(');
        if (contentMap[content]) {
          contentMap[content].push(fpath);
        } else {
          contentMap[content] = [fpath];
        }
      });
  });
  return Object.values(contentMap).filter(arr => arr.length > 1);
};
