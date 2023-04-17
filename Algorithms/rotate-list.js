/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head || !k) return head;

  let len = 1;
  let node = head;
  while (node.next) {
    len++;
    node = node.next;
  }
  const j = len - (k % len);
  if (j === len) return head;

  const tail = node;
  node = head;
  for (let i = 1; i < j; i++) node = node.next;

  const result = node.next;
  node.next = null;
  tail.next = head;
  return result;
};
