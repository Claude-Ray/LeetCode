package problem22

func generateParenthesis(n int) []string {
	res := []string{}
	if n < 1 {
		return res
	}
	backtracking(2*n, n-1, n, "(", &res)
	return res
}

func backtracking(n int, left int, right int, cur string, res *[]string) {
	if len(cur) == n {
		*res = append(*res, cur)
		return
	}
	if left > 0 {
		backtracking(n, left-1, right, cur+"(", res)
	}
	if left < right {
		backtracking(n, left, right-1, cur+")", res)
	}
}
