/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let s1 = listToRevLong(l1);
  let s2 = listToRevLong(l2);
  return revLong2list(s1, s2);
};

function listToRevLong(list) {
  let str = '';
  while (list) {
    str = list.val + str;
    list = list.next;
  }
  return str || '0';
}

function revLong2list(s1, s2) {
  const len = Math.max(s1.length, s2.length);
  let flag = 0;
  const revValList = [];
  for (let i = 0; i < len; i++) {
    let sum = 0;
    if (s1[i] && s2[i]) {
      sum = +s1[i] + +s2[i] + flag;
    } else if (s1[i]) {
      sum = +s1[i] + flag;
    } else {
      sum = +s2[i] + flag;
    }
    flag = 0;
    if (sum >= 10) {
      sum -= 10;
      flag = 1;
    }
    revValList.push(sum);
  }
  if (flag === 1) {
    revValList.push(1);
  }
  return revValList.reduce((node, n) => new ListNode(n, node), null);
}
