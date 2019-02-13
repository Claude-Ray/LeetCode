解法一

使用 map 存储每个字符

```go
func firstUniqChar(s string) int {
	charMap := map[rune]int{}
	for _, char := range s {
		charMap[char]++
	}
	for i, char := range s {
		if charMap[char] == 1 {
			return i
		}
	}
	return -1
}
```

解法二

使用数组存储，字符的 ASCII 码作为下标
