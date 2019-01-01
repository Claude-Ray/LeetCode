核心思路是DFS或BFS。下面主要记录语言层面的陷阱。

## JS
`push + pop` 的组合比 `concat` 高效很多，400ms到100ms的差距。

在合并最终结果时，参考了最高的答案用`slice`来做数组拷贝。

## Golang
`append in slice` 有一些坑。

如果直接按下面这样写，append可能会改变slice原有的值，进而导致运行出错。
```go
func helper(n int, k int, s int, cur []int, res *[][]int) {
	if len(cur) == k {
		*res = append(*res, cur)
		return
	}
	for i := s; i <= n; i++ {
		helper(n, k, i+1, append(cur, i), res)
	}
}
```
因此需要每次append前主动创建空间。
```go
if len(cur) == k {
	c := make([]int, len(cur))
	copy(c, cur)
	*res = append(*res, c)
	return
}
```

### Reference
- [buildin func append](https://golang.org/pkg/builtin/#append)
> The append built-in function appends elements to the end of a slice. If it has sufficient capacity, the destination is resliced to accommodate the new elements. If it does not, a new underlying array will be allocated. Append returns the updated slice.

- [effective go #slices](https://golang.org/doc/effective_go.html#slices)
```go
func Append(slice, data []byte) []byte {
	l := len(slice)
	if l + len(data) > cap(slice) {  // reallocate
		// Allocate double what's needed, for future growth.
		newSlice := make([]byte, (l+len(data))*2)
		// The copy function is predeclared and works for any slice type.
		copy(newSlice, slice)
		slice = newSlice
	}
	slice = slice[0:l+len(data)]
	copy(slice[l:], data)
	return slice
}
```
> We must return the slice afterwards because, although Append can modify the elements of slice, the slice itself (the run-time data structure holding the pointer, length, and capacity) is passed by value.