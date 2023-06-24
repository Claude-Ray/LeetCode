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
var reverseList = function (head) {
  let point = null;
  let node = head;
  while (node) {
    const tmp = node;
    node = node.next;
    tmp.next = point;
    point = tmp;
  }
  return point;
};
