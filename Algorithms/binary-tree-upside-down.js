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
 * @return {TreeNode}
 */
var upsideDownBinaryTree = function (root) {
  if (!root) return root;
  const stack = [];
  let node = root;
  while (node) {
    stack.push(node);
    node = node.left;
  }
  const res = stack.pop();
  let prev = res;
  while (stack.length) {
    const node = stack.pop();
    prev.right = node;
    prev.left = node.right;
    prev = node;
  }
  root.left = null;
  root.right = null;
  return res;
};
