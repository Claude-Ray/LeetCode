/**
 * Initialize your data structure here.
 */
var RandomizedCollection = function () {
  this.map = {};
  this.arr = [];
};

/**
 * Inserts a value to the collection. Returns true if the collection did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function (val) {
  const index = this.arr.push(val) - 1;
  if (this.map[val]) {
    this.map[val].push(index);
    return false;
  } else {
    this.map[val] = [index];
    return true;
  }
};

/**
 * Removes a value from the collection. Returns true if the collection contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function (val) {
  if (!this.map[val]) return false;
  const index = this.map[val].pop();
  if (index !== this.arr.length - 1) {
    const replace = (this.arr[index] = this.arr[this.arr.length - 1]);
    this.map[replace][this.map[replace].indexOf(this.arr.length - 1)] = index;
  }

  if (!this.map[val].length) {
    delete this.map[val];
  }
  this.arr.pop();
  return true;
};

/**
 * Get a random element from the collection.
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function () {
  return this.arr[
    this.arr.length === 1 ? 0 : Math.floor(Math.random() * this.arr.length)
  ];
};

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
