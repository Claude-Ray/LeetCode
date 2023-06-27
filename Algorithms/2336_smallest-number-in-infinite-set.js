var SmallestInfiniteSet = function () {
  this.smallest = 1;
  this.pushQueue = [];
  this.popSet = new Set();
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function () {
  const num = this.pushQueue.length ? this.pushQueue.pop() : this.smallest++;
  this.popSet.add(num);
  return num;
};

/**
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function (num) {
  if (!this.popSet.has(num)) return;
  this.popSet.delete(num);

  let left = 0;
  let right = this.pushQueue.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (this.pushQueue[mid] === mid) {
      right = mid;
      break;
    }
    if (this.pushQueue[mid] < num) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  this.pushQueue.splice(right, 0, num);
};

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */
