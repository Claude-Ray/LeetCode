/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  return dfs(root, []).join();
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  return deDfs(data.split(','));
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
function dfs(node, postorder) {
  if (node) {
    dfs(node.left, postorder);
    dfs(node.right, postorder);
    postorder.push(node.val);
  } else {
    postorder.push(null);
  }
  return postorder;
}

function deDfs(postorder) {
  if (!postorder.length) return null;
  const val = postorder.pop();
  if (val === '') return null;
  const node = new TreeNode(+val);
  node.right = deDfs(postorder);
  node.left = deDfs(postorder);
  return node;
}
