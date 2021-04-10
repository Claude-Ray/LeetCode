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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  let node = root;
  let parent;
  let path;
  while (node) {
    if (node.val === key) {
      if (parent) {
        const replace = node.right || node.left;
        if (!node.right) {
          parent[path] = node.left;
          return root;
        }
        parent[path] = node.right;
        if (!node.left) return root;
      } else {
        if (!node.right) return node.left;
        if (!node.left) return node.right;
        root = node.right;
      }
      let leftLeaf = node.right;
      do {
        if (!leftLeaf.left) {
          leftLeaf.left = node.left;
          return root;
        }
        leftLeaf = leftLeaf.left;
      } while (leftLeaf);
      return root;
    }
    parent = node;
    path = node.val > key ? 'left' : 'right';
    node = node[path];
  }
  return root;
};
