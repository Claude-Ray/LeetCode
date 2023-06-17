/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseWords = function (s) {
  reverse(s, 0, s.length - 1);
  for (let i = 0; i < s.length; i++) {
    let j = i;
    while (s[++j] !== ' ' && j < s.length) {}
    reverse(s, i, j - 1);
    i = j;
  }
};

function reverse(arr, start, end) {
  do {
    const tmp = arr[start];
    arr[start] = arr[end];
    arr[end] = tmp;
  } while (++start < --end);
}
