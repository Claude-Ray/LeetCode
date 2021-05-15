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
var sumOfLeftLeaves = function (root) {
  let sum = 0;
  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    if (node.left) {
      if (node.left.left || node.left.right) {
        stack.push(node.left);
      } else {
        sum += node.left.val;
      }
    }
    node.right && stack.push(node.right);
  }
  return sum;
};
