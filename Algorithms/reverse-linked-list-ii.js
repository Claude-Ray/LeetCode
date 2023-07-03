/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  if (right === left) return head;
  let i = 0;
  const preHead = { next: head };
  let leftPivot = preHead;
  while (leftPivot && ++i < left) leftPivot = leftPivot.next;
  const rightPivot = leftPivot.next;
  let node = rightPivot;
  let prev = null;
  while (node && i++ <= right) {
    const tmp = node.next;
    node.next = prev;
    prev = node;
    node = tmp;
  }
  rightPivot.next = node;
  leftPivot.next = prev;
  return preHead.next;
};
