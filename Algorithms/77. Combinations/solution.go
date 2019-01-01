package problem77

func combine(n int, k int) [][]int {
	combinations := [][]int{}
	helper(n, k, 1, []int{}, &combinations)
	return combinations
}

func helper(n int, k int, s int, cur []int, res *[][]int) {
	if len(cur) == k {
		c := make([]int, len(cur))
		copy(c, cur)
		*res = append(*res, c)
		return
	}
	for i := s; i <= n; i++ {
		helper(n, k, i+1, append(cur, i), res)
	}
}
