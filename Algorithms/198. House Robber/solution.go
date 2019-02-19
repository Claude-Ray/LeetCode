package problem198

func rob(nums []int) int {
	if len(nums) == 0 {
		return 0
	}
	if len(nums) == 1 {
		return nums[0]
	}
	money := []int{nums[0], max(nums[0], nums[1])}
	for i := 2; i < len(nums); i++ {
		money = append(money, max(money[i-2]+nums[i], money[i-1]))
	}
	return money[len(nums)-1]
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
