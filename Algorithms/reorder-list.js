/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  const arr = [];
  for (let i = head; i; i = i.next) {
    arr.push(i);
  }
  const result = {};
  let pre = result;
  for (let i = 0, j = arr.length - 1; i <= j; i++, j--) {
    if (i === j) {
      pre.next = arr[i];
      pre = arr[i];
      break;
    }
    pre.next = arr[i];
    arr[i].next = arr[j];
    pre = arr[j];
  }
  pre.next = null;
  return result.next;
};
