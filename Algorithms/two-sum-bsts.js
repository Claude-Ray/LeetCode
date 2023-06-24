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
 * @param {number} target
 * @return {boolean}
 */
var twoSumBSTs = function (root1, root2, target) {
  const set = new Set();
  const stack = [root1];
  while (stack.length) {
    const node = stack.pop();
    set.add(node.val);
    node.left && stack.push(node.left);
    node.right && stack.push(node.right);
  }
  stack.push(root2);
  while (stack.length) {
    const node = stack.pop();
    if (set.has(target - node.val)) return true;
    node.left && stack.push(node.left);
    node.right && stack.push(node.right);
  }
  return false;
};
