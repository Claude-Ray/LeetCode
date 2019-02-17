package problem371

func getSum(a int, b int) int {
	if a == 0 {
		return b
	}
	if b == 0 {
		return a
	}
	return getSum(a^b, a&b<<1)
}
