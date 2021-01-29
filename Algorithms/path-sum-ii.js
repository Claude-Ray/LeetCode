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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  if (!root) return [];
  const result = [];
  const stack = [root];
  const visitedMap = new Map();
  visitedMap.set(root, []);
  while (stack.length) {
    const node = stack.pop();
    const visited = visitedMap.get(node).concat(node.val);
    if (node.right) {
      stack.push(node.right);
      visitedMap.set(node.right, visited);
    }
    if (node.left) {
      stack.push(node.left);
      visitedMap.set(node.left, visited);
    }
    if (!node.left && !node.right) {
      const sum = visited.reduce((s, n) => s + n, 0);
      if (sum === targetSum) {
        result.push([...visited]);
      }
    }
  }
  return result;
};
