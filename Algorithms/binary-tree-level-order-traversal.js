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
var levelOrder = function (root) {
  if (!root) return [];
  const result = [];
  let queue = [root];
  while (queue.length) {
    const next = [];
    const level = [];
    for (const node of queue) {
      level.push(node.val);
      node.left && next.push(node.left);
      node.right && next.push(node.right);
    }
    result.push(level);
    queue = next;
  }
  return result;
};
