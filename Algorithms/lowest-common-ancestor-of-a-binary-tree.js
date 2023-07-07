/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (root.val === p.val || root.val === q.val) return root;
  let result = null;

  function dfs(root) {
    if (!root || result) return false;
    const left = dfs(root.left);
    const right = dfs(root.right);
    const mid = root.val === p.val || root.val === q.val;
    if ((left && right) || (mid && (left || right))) {
      result = root;
      return false;
    }
    return left || right || mid;
  }

  dfs(root);
  return result;
};
