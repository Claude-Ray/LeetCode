/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  if (!head) return head;
  const evenHead = {};
  let evenPre = evenHead;
  let node = head;
  while (node.next) {
    evenPre = evenPre.next = node.next;
    node.next = node.next.next;
    if (node.next) node = node.next;
  }
  evenPre.next = null;
  node.next = evenHead.next;
  return head;
};
