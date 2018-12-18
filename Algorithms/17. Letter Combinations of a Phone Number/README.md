首先这道题难度很低。

但一开始会错了题意，以为字符串的排序不能重复，例如不能同时出现'aba'和'aab'。记一下这种情况的解法，对比原题解法，有两个不同点：
- 在分隔数字的时候加上排序
  ```js
  const nums = digits.split('').sort();
  ```
- 每次只允许 ASCII 码大于等于前一个的字符插入。
  ```js
  strs.filter(str => !str.length || str.charCodeAt(str.length - 1) <= char.charCodeAt(0))
    .map(str => str += char)
  ```

完整的“错解”如下。
```js
function letterCombinations(digits) {
  if (!digits) return [];
  const map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  };
  const nums = digits.split('').sort();
  let strs = [''];
  while (nums.length > 0) {
    strs = map[nums.shift()].reduce((newStrs, char) =>
      newStrs.concat(
        strs.filter(str => !str.length || str.charCodeAt(str.length - 1) <= char.charCodeAt(0))
          .map(str => str += char)
      ), []);
  }
  return strs;
};
```
