const MAP = Symbol('map');
const CAPACITY = Symbol('capacity');

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this[MAP] = new Map();
  this[CAPACITY] = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this[MAP].has(key)) return -1;
  const val = this[MAP].get(key);
  this[MAP].delete(key);
  this[MAP].set(key, val);
  return val;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this[MAP].has(key)) this[MAP].delete(key);
  this[MAP].set(key, value);
  if (this[MAP].size > this[CAPACITY]) {
    const iterator = this[MAP].keys();
    const LRUKey = iterator.next();
    this[MAP].delete(LRUKey.value);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
