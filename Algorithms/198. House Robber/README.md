## 解法一

使用数组记录，偷到当前这一户人，最大收益是多少。
返回数组末两位的最大值。

```js
var rob = function (nums) {
  const len = nums.length;
  if (len === 0) return 0;
  if (len === 1) return nums[0];
  const values = [nums[0], nums[1]];
  if (len > 2) values[2] = nums[2] + nums[0];
  for (let i = 3; i < len; i++) {
    values[i] = Math.max(values[i - 2], values[i - 3]) + nums[i];
  }
  return Math.max(values[len - 1], values[len - 2]);
};
```

## 解法二

上面的结果其实不需要数组，只要有两个变量分别记录奇数和偶数户的最大收益。
返回这两个变量的最大值。

见solution.js

## 解法三

使用数组记录，截止到当前这一户（当前户不一定被偷），最大收益是多少。
返回数组的末尾即可。

见solution.go
