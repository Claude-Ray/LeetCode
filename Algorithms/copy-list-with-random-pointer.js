/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (!head) return null;
  const map = new Map();
  const get = n => (map.has(n) || map.set(n, new Node(n.val))) && map.get(n);
  let node = head;
  while (node) {
    get(node).next = node.next && get(node.next);
    get(node).random = node.random && get(node.random);
    node = node.next;
  }
  return get(head);
};

var copyRandomList2 = function (head) {
  const map = new Map();
  const array = [];
  const resultPre = {};
  let node = head;
  let copyPre = resultPre;
  let i = 0;
  while (node) {
    copyPre.next = {
      val: node.val,
      random: null,
      next: null,
    };
    array.push(copyPre.next);
    map.set(node, i++);
    node = node.next;
    copyPre = copyPre.next;
  }
  node = head;
  copyPre = resultPre;
  while (node) {
    copyPre = copyPre.next;
    if (node.random) {
      copyPre.random = array[map.get(node.random)];
    }
    node = node.next;
  }
  return resultPre.next;
};
