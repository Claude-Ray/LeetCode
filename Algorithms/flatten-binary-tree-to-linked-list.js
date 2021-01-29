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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  if (!root) return root;
  const stack = [root];
  const head = {};
  let pre = head;
  while (stack.length) {
    const node = stack.pop();
    node.right && stack.push(node.right);
    if (node.left) {
      stack.push(node.left);
      node.left = null;
    }
    pre.right = node;
    pre = node;
  }
  return root;
};
