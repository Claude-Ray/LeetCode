/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  const result = { next: head };
  let pre = result;
  while (pre.next) {
    if (pre.next.val === val) {
      pre.next = pre.next.next;
    } else {
      pre = pre.next;
    }
  }
  return result.next;
};
