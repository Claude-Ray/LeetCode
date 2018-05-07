/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @desc Something seems wrong with the LeetCode OJ,
 * which expects to get an array as return instead of a TreeNode.
 * What's more, I got [6,3,5,null,2,0,null,null,1], but OJ comed out [6,3,5,[],2,0,[],[],1].
 * @param {number[]} nums
 * @return {TreeNode/number[]}
 */
var constructMaximumBinaryTree = function (nums) {
  const root = getTreeNode(nums);
  return tree2Array(root);
};

/**
 * structure tree and return its root node
 * @param {array} nums
 * @param {TreeNode}
 */
function getTreeNode(nums) {
  if (nums.length === 0) return null;
  if (nums.length === 1) return new TreeNode(nums[0]);
  const max = Math.max(...nums);
  const index = nums.indexOf(max);
  const treeNode = new TreeNode(max);
  treeNode.left = getTreeNode(nums.slice(0, index));
  treeNode.right = getTreeNode(nums.slice(index + 1));
  return treeNode;
}

/**
 * TreeNode -> Array
 * @param {TreeNode} root
 * @return {array}
 */
function tree2Array(root) {
  const result = [];
  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    if (node === null) {
      result.push(null);
      continue;
    }
    result.push(node.val);
    if (!(node.left || node.right))
      continue;
    queue.push(node.left);
    queue.push(node.right);
  }
  return result;
}