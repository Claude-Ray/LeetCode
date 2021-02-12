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
var countNodes = function (root) {
  let count = 0;
  if (!root) return count;
  const stack = [root];
  while (stack.length) {
    count++;
    const node = stack.pop();
    node.left && stack.push(node.left);
    node.right && stack.push(node.right);
  }
  return count;
};

var countNodes2 = function (root) {
  if (!root) return 0;
  let cursor = root;
  // get the depth from the perfect part
  let perfectDepth = 0;
  while (cursor.left) {
    perfectDepth++;
    cursor = cursor.left;
  }

  let count = Math.pow(2, perfectDepth) - 1;
  let left = 0;
  let right = count;
  while (left < right) {
    const middle = Math.ceil((right + left) / 2);
    if (find(middle)) {
      left = middle;
    } else {
      right = middle - 1;
    }
  }
  return count + left + 1;

  /**
   * Find the node at index
   * @param {number} index
   * @returns {TreeNode|null}
   */
  function find(index) {
    let node = root;
    let l = 0;
    let r = count;
    while (l < r) {
      const mid = Math.ceil((l + r) / 2);
      if (mid <= index) {
        node = node.right;
        l = mid;
      } else {
        node = node.left;
        r = mid - 1;
      }
    }
    return node;
  }
};
