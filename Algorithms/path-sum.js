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
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) return [];
  const stack = [{ node: root }];
  const visited = [];
  while (stack.length) {
    const cur = stack[stack.length - 1];
    if (cur.node.left && !cur.l) {
      cur.l = true;
      stack.push({ node: cur.node.left });
      visited.push(cur.node.val);
    } else if (cur.node.right && !cur.r) {
      cur.r = true;
      stack.push({ node: cur.node.right });
      visited.push(cur.node.val);
    } else {
      if (!cur.node.left && !cur.node.right) {
        const sum = visited.reduce((s, n) => s + n, cur.node.val);
        if (sum === targetSum) return true;
      }
      stack.pop();
      visited.pop();
    }
  }
  return false;
};
