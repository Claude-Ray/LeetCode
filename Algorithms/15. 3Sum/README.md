这个题用JS编写有些需要注意的点。

首先是`Array.prototype.sort()`，默认按照ASCII码排序
```js
> [11, 1, 2].sort()
[ 1, 11, 2 ]

> [-1, -2, 0].sort()
[ -1, -2, 0 ]
```
因此需要明确指定比较函数`.sort((a, b)=> a - b)`
```js
> [-1, -2, 0].sort((a, b)=> a - b)
[ -2, -1, 0 ]
```

其次是一些细枝末节的地方反而带来了性能差异。

从初次完成到尝试更换各种校验逻辑，速度一直没有显著提高。修改了`if else`的顺序，从而减少了`continue`的使用，这带来了4ms的性能提升。

在标识尾部的游标时，声明了变量k，`let k = nums.length - 1;`，然而最初我声明的变量名为`tail`，将变量重命名后再次提升了4ms。

由于本身运行速度较慢，在语法优化上的差距被放大了，何况OJ不同时间提交得出的结果都不完全一样。本次较真过后，如果逻辑没有明显问题，不再纠结最优速度。更换效率更高的语言，降低语法层面的影响，~~然而恐怕不能，每个语言有各自的优化技巧~~。