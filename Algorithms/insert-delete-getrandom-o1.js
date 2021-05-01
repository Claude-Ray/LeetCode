/**
 * Initialize your data structure here.
 */
var RandomizedSet = function () {
  this.set = {};
  this.arr = [];
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  return !this.set[val] && (this.arr = []) && (this.set[val] = true);
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  return !!this.set[val] && (this.arr = []) && delete this.set[val];
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  if (!this.arr.length) this.arr = Object.keys(this.set);
  return this.arr[
    this.arr.length === 1 ? 0 : Math.floor(Math.random() * this.arr.length)
  ];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
