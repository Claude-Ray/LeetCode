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
var deleteMiddle = function (head) {
  const map = [];
  let node = head;
  while (node) {
    map.push(node);
    node = node.next;
  }
  const midIndex = Math.floor(map.length / 2);
  if (midIndex) map[midIndex - 1].next = map[midIndex].next;
  else head = head.next;
  return head;
};
