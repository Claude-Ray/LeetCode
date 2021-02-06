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
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    node.next = null;
  }
  return root;
};
