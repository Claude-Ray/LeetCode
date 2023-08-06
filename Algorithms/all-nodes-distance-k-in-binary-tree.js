/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function (root, target, k) {
  if (!root) return [];
  const stack = [root];
  const visited = {};
  let queue = [];
  while (stack.length) {
    const node = stack[stack.length - 1];
    if (!visited[node.val]) {
      if (node === target) {
        queue.push(stack.pop());
        break;
      }
      node.left && stack.push(node.left);
      visited[node.val] = 1;
    } else if (visited[node.val] === 1) {
      node.right && stack.push(node.right);
      visited[node.val] = 2;
    } else if (visited[node.val] === 2) {
      stack.pop();
    }
  }
  for (const node of stack) {
    if (visited[node.val] === 2) node.right = null;
    else if (visited[node.val] === 1) node.left = null;
  }

  let i = 0;
  while (queue.length && ++i <= k) {
    const newQueue = [];
    for (const node of queue) {
      node.left && newQueue.push(node.left);
      node.right && newQueue.push(node.right);
    }
    stack.length && newQueue.push(stack.pop());
    queue = newQueue;
  }
  return queue.map(n => n.val);
};
