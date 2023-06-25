/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  const leaves1 = getLeaf(root1);
  const leaves2 = getLeaf(root2);
  return (
    leaves1.length === leaves2.length &&
    leaves1.every((n, i) => n === leaves2[i])
  );
};

function getLeaf(root, res = []) {
  root.left && getLeaf(root.left, res);
  root.right && getLeaf(root.right, res);
  if (!root.left && !root.right) res.push(root.val);
  return res;
}
