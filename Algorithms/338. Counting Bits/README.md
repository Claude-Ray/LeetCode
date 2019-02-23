判断一个数的二进制包含几个 1 ，一般做法是判断 n%1 的结果，并循环 n/2
```go
func countBit(n int) int {
  count := 0
  for n > 0 {
    if n%2 == 1 {
      count++
    }
    n /= 2
  }
  return count
}
```
每次计算数值 n 的结果，实际等于用 n/2 的结果加上 n%1 的结果。利用这一点，便可以使用动态规划解题。
