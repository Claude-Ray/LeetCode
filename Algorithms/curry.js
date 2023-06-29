/**
 * @param {Function} fn
 * @return {Function}
 */
var curry = function (fn) {
  return function curried(...args) {
    return args.length < fn.length ? curried.bind(null, ...args) : fn(...args);
  };
};

/**
 * function sum(a, b) { return a + b; }
 * const csum = curry(sum);
 * csum(1)(2) // 3
 */
