/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var throttle = function (fn, t) {
  let last = 0;
  let timer = null;
  return function (...args) {
    const now = Date.now();
    if (now - last > t) {
      last = now;
      fn(...args);
      return;
    }
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
      last = Date.now();
      timer = null;
    }, last + t - now);
  };
};

/**
 * const throttled = throttle(console.log, 100);
 * throttled("log"); // logged immediately.
 * throttled("log"); // logged at t=100ms.
 */
