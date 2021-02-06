/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) return root;
  const queue = [root];
  let node = null;
  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      node = queue.shift();
      node.next = queue[0];
      node.left && queue.push(node.left, node.right);
    }
    node.next = null;
  }
  return root;
};

var connect2 = function (root) {
  if (!root) return root;
  let parents = [];
  let children = [root];
  while (children.length) {
    parents = children;
    children = [];
    for (let i = 0; i < parents.length; i++) {
      parents[i].next = parents[i + 1];
      if (parents[i].left) {
        children.push(parents[i].left, parents[i].right);
      }
    }
    parents[parents.length - 1].next = null;
  }
  return root;
};
