/**
 * @param {number[]} nums
 */
var FirstUnique = function (nums) {
  this.uniqueSet = new Set();
  this.duplicateSet = new Set();
  nums.forEach(n => this.add(n));
};

/**
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function () {
  return this.uniqueSet.size ? this.uniqueSet.keys().next().value : -1;
};

/**
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function (value) {
  if (this.duplicateSet.has(value)) return;

  if (this.uniqueSet.has(value)) {
    this.duplicateSet.add(value);
    this.uniqueSet.delete(value);
  } else {
    this.uniqueSet.add(value);
  }
};

/**
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */
