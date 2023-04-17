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
var swapPairs = function (head) {
  const res = { next: head };
  let pre = res;
  while (pre.next && pre.next.next) {
    let cur = pre.next;
    let next = cur.next;
    cur.next = next.next;
    next.next = cur;
    pre.next = next;
    pre = cur;
  }
  return res.next;
};
