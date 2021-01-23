/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  return '/' + path
    .split('/')
    .filter(s => s !== '' && s !== '.')
    .reduce((arr, d) =>
      (d === '..' ? (!arr.length || arr.pop()) : arr.push(d)) && arr, [])
    .join('/');
};
