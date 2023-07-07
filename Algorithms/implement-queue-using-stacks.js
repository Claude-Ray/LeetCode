var MyQueue = function () {
  this.pushStack = [];
  this.popStack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.pushStack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (!this.popStack.length) {
    while (this.pushStack.length) {
      this.popStack.push(this.pushStack.pop());
    }
  }
  return this.popStack.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (!this.popStack.length) {
    while (this.pushStack.length) {
      this.popStack.push(this.pushStack.pop());
    }
  }
  return this.popStack[this.popStack.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return !(this.popStack.length || this.pushStack.length);
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
