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
var findFrequentTreeSum = function (root) {
  const map = {};
  const stack = [{ node: root, val: root.val }];
  while (stack.length) {
    const cur = stack[stack.length - 1];
    if (cur.node.left && !cur.left) {
      stack.push({ node: cur.node.left, val: cur.node.left.val });
      cur.left = true;
    } else if (cur.node.right && !cur.right) {
      stack.push({ node: cur.node.right, val: cur.node.right.val });
      cur.right = true;
    } else {
      if (map[cur.val]) {
        map[cur.val].push(cur.node.val);
      } else {
        map[cur.val] = [cur.node.val];
      }
      stack.pop();
      if (stack.length) {
        stack[stack.length - 1].val += cur.val;
      }
    }
  }
  const sums = Object.keys(map).map(Number);
  const max = Math.max(...sums.map(s => map[s].length));
  return sums.filter(s => map[s].length === max);
};
