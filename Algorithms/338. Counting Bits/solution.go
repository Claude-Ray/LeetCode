package problem338

func countBits(num int) []int {
	res := []int{0}
	for i := 1; i <= num; i++ {
		res = append(res, res[i/2]+i%2)
	}
	return res
}
