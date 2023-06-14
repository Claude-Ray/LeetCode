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
var getMinimumDifference = function (root) {
  const res = helper(root, []);
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 1; i < res.length; i++) min = Math.min(min, res[i] - res[i - 1]);
  return min;
};

function helper(root, res) {
  if (!root) return res;
  if (root.left) helper(root.left, res);
  res.push(root.val);
  if (root.right) helper(root.right, res);
  return res;
}
