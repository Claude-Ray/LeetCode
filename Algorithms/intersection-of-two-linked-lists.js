/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  const map = new Map();
  let a = headA;
  while (a) {
    map.set(a, true);
    a = a.next;
  }
  let b = headB;
  while (b) {
    if (map.has(b)) return b;
    b = b.next;
  }
  return null;
};

var getIntersectionNode2 = function (headA, headB) {
  let a = headA;
  let lenA = 0;
  while (a) {
    a = a.next;
    lenA++;
  }
  let b = headB;
  let lenB = 0;
  while (b) {
    b = b.next;
    lenB++;
  }
  a = headA;
  b = headB;
  if (lenA > lenB) {
    do {
      a = a.next;
    } while (--lenA > lenB);
  } else if (lenA < lenB) {
    do {
      b = b.next;
    } while (--lenB > lenA);
  }
  while (lenA--) {
    if (a === b) return a;
    a = a.next;
    b = b.next;
  }
  return null;
};
