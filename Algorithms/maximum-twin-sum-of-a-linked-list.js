/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
  let fast = head;
  let slow = head;
  let prev = null;
  while (fast && fast.next) {
    fast = fast.next.next;
    const tmp = slow.next;
    slow.next = prev;
    prev = slow;
    slow = tmp;
  }
  let max = 0;
  while (prev) {
    max = Math.max(max, prev.val + slow.val);
    prev = prev.next;
    slow = slow.next;
  }
  return max;
};

/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum2 = function (head) {
  const arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  let max = 0;
  for (let i = 0; i < arr.length / 2; i++)
    max = Math.max(max, arr[i] + arr[arr.length - i - 1]);
  return max;
};
