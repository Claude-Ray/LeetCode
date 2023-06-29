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
var countUnivalSubtrees = function (root) {
  if (!root) return 0;
  let count = 0;

  function dfs(node, val) {
    if (!node) return true;
    const left = dfs(node.left, node.val);
    const right = dfs(node.right, node.val);
    if (left && right) {
      count++;
      return node.val === val;
    }
    return false;
  }

  dfs(root, root.val);
  return count;
};
