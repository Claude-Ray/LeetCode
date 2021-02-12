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
var countNodes = function (root) {
  let count = 0;
  if (!root) return count;
  const stack = [root];
  while (stack.length) {
    count++;
    const node = stack.pop();
    node.left && stack.push(node.left);
    node.right && stack.push(node.right);
  }
  return count;
};
