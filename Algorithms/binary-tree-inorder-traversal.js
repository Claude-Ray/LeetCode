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
var inorderTraversal = function (root) {
  const res = [];
  const stack = [];
  let cur = root;
  while (cur || stack.length) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    res.push(cur.val);
    cur = cur.right;
  }
  return res;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal2 = function (root) {
  return dfs(root, []);
};

function dfs(root, nums) {
  if (root) {
    dfs(root.left, nums);
    nums.push(root.val);
    dfs(root.right, nums);
  }
  return nums;
}
