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
var goodNodes = function (root) {
  return dfs(root, Number.MIN_SAFE_INTEGER);
};

function dfs(root, max) {
  if (!root) return 0;
  return root.val >= max
    ? 1 + dfs(root.left, root.val) + dfs(root.right, root.val)
    : dfs(root.left, max) + dfs(root.right, max);
}
