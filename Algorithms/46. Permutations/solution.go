package problem46

func permute(nums []int) [][]int {
	result := [][]int{}
	helper(nums, []int{}, &result)
	return result
}

func helper(nums []int, cur []int, res *[][]int) {
	if len(nums) == 0 {
		*res = append(*res, cur)
		return
	}
	for i := 0; i < len(nums); i++ {
		c := make([]int, len(cur))
		copy(c, cur)
		n := make([]int, len(nums))
		copy(n, nums)
		helper(append(n[:i], n[i+1:]...), append(c, nums[i]), res)
	}
}
