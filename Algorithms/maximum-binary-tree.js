/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  const stack = [];
  for (const n of nums) {
    const cur = new TreeNode(n);
    while (stack.length && stack[stack.length - 1].val < n) cur.left = stack.pop();
    if (stack.length) stack[stack.length - 1].right = cur;
    stack.push(cur);
  }
  return stack[0];
};

var constructMaximumBinaryTree2 = function (nums) {
  if (nums.length === 0) return null;
  if (nums.length === 1) return new TreeNode(nums[0]);
  const max = Math.max(...nums);
  const index = nums.indexOf(max);
  const treeNode = new TreeNode(max);
  treeNode.left = constructMaximumBinaryTree(nums.slice(0, index));
  treeNode.right = constructMaximumBinaryTree(nums.slice(index + 1));
  return treeNode;
};
