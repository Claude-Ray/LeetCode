/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {string} s
 * @return {NestedInteger}
 */
var deserialize = function (s) {
  if (s[0] !== '[') {
    const result = new NestedInteger();
    result.setInteger(+s);
    return result;
  }

  const stack = [];
  let cur = new NestedInteger();
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '[') {
      stack.push(cur);
      if (s[i + 1] !== ']') {
        const child = new NestedInteger();
        cur.add(child);
        cur = child;
      }
    } else if (s[i] === ']') {
      cur = stack.pop();
    } else if (s[i] === ',') {
      const brother = new NestedInteger();
      stack[stack.length - 1].add(brother);
      cur = brother;
    } else {
      let int = s[i];
      while (i < s.length - 1 && !isNaN(+s[i + 1])) {
        int += s[++i];
      }
      cur.setInteger(+int);
    }
  }
  return cur;
};

function NestedInteger() {
  /**
   * Return true if this NestedInteger holds a single integer, rather than a nested list.
   * @return {boolean}
   */
  this.isInteger = function () {};

  /**
   * Return the single integer that this NestedInteger holds, if it holds a single integer
   * Return null if this NestedInteger holds a nested list
   * @return {integer}
   */
  this.getInteger = function () {};

  /**
   * Set this NestedInteger to hold a single integer equal to value.
   * @return {void}
   */
  this.setInteger = function (value) {};

  /**
   * Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
   * @return {void}
   */
  this.add = function (elem) {};

  /**
   * Return the nested list that this NestedInteger holds, if it holds a nested list
   * Return null if this NestedInteger holds a single integer
   * @return {NestedInteger[]}
   */
  this.getList = function () {};
}
