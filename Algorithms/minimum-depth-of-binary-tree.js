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
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) return 0;
  let count = 0;
  let queue = [root];
  while (queue.length) {
    count++;
    const newQueue = [];
    for (const node of queue) {
      if (!node.left && !node.right) return count;
      node.left && newQueue.push(node.left);
      node.right && newQueue.push(node.right);
    }
    queue = newQueue;
  }
  return count;
};
