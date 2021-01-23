/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  const pre = { next: head };
  const arr = [pre];
  let node = head;
  while (node) {
    arr.push(node);
    node = node.next;
  }
  const index = arr.length - n;
  arr[index - 1].next = arr[index + 1] || null;
  return pre.next;
};
