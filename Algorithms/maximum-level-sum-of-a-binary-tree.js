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
var maxLevelSum = function (root) {
  let max = root.val;
  let maxLevel = 1;
  let level = 1;
  let old = [root];
  while (old.length) {
    let sum = 0;
    const young = [];
    for (let i = 0; i < old.length; i++) {
      const node = old[i];
      sum += node.val;
      node.left && young.push(node.left);
      node.right && young.push(node.right);
    }
    if (sum > max) {
      maxLevel = level;
      max = sum;
    }
    level++;
    old = young;
  }
  return max;
};
