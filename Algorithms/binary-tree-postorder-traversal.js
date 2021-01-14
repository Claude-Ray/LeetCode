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
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  if (!root) return [];
  const result = [];
  const stack = [{ node: root }];
  while (stack.length) {
    let cur = stack[stack.length - 1];
    if (!cur.l && cur.node.left) {
      cur.l = true;
      stack.push({ node: cur.node.left });
    } else if (!cur.r && cur.node.right) {
      cur.r = true;
      stack.push({ node: cur.node.right });
    } else {
      result.push(cur.node.val);
      stack.pop();
    }
  }
  return result;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal2 = function (root) {
  if (!root) return [];
  const result = [];
  const stack = [root];
  while (stack.length) {
    let cur = stack[stack.length - 1];
    if (cur.left) {
      stack.push(cur.left);
      cur.left = null;
    } else if (cur.right) {
      stack.push(cur.right);
      cur.right = null;
    } else {
      result.push(cur.val);
      stack.pop();
    }
  }
  return result;
};
