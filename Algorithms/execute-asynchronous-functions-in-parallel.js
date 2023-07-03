/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = async function (functions) {
  return new Promise((resolve, reject) => {
    let count = 0;
    const result = [];
    functions.forEach((fn, i) =>
      fn()
        .then(res => {
          result[i] = res;
          if (++count === functions.length) resolve(result);
        })
        .catch(reject)
    );
  });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
