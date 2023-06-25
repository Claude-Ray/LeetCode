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
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (!root) return [];
  const result = [];
  let queue = [root];
  while (queue.length) {
    result.push(queue[queue.length - 1].val);
    const newQueue = [];
    for (const node of queue) {
      node.left && newQueue.push(node.left);
      node.right && newQueue.push(node.right);
    }
    queue = newQueue;
  }
  return result;
};
