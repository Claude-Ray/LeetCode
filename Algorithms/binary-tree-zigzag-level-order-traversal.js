/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  const result = [];
  let queue = [root];
  let right = true;
  while (queue.length) {
    const newQueue = [];
    const values = [];
    const add = right ? 'push' : 'unshift';
    right = !right;
    for (const node of queue) {
      values[add](node.val);
      node.left && newQueue.push(node.left);
      node.right && newQueue.push(node.right);
    }
    result.push(values);
    queue = newQueue;
  }
  return result;
};
