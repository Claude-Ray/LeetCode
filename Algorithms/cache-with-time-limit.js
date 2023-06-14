var TimeLimitedCache = function () {
  this.cache = {};
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  const v = this.cache[key];
  this.cache[key] = [value, duration + Date.now()];
  return !!v && v[1] >= Date.now();
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  const v = this.cache[key];
  if (!v || v[1] < Date.now()) {
    delete this.cache[key];
    return -1;
  }
  return v[0];
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  const now = Date.now();
  let count = 0;
  for (const key of Object.keys(this.cache)) {
    if (this.cache[key][1] >= now) count++;
    else delete this.cache[key];
  }
  return count;
};

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */

var TimeLimitedCache2 = function () {
  this.cache = new Map();
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache2.prototype.set = function (key, value, duration) {
  const data = this.cache.get(key);
  if (data) clearTimeout(data.t);
  this.cache.set(key, {
    v: value,
    t: setTimeout(() => this.cache.delete(key), duration),
  });
  return !!data;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache2.prototype.get = function (key) {
  return this.cache.has(key) ? this.cache.get(key).v : -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache2.prototype.count = function () {
  return this.cache.size;
};
