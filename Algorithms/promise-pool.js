/**
 * @param {Function[]} functions
 * @param {number} n
 * @return {Promise<any>}
 */
var promisePool = async function (functions, n) {
  let i = n;
  async function next() {
    if (i < functions.length) {
      await functions[i++]();
      await next();
    }
  }
  return Promise.all(functions.slice(0, n).map(fn => fn().then(next)));
};

/**
 * const sleep = (t) => new Promise(res => setTimeout(res, t));
 * promisePool([() => sleep(500), () => sleep(400)], 1)
 *   .then(console.log) // After 900ms
 */
