package problem47

import "sort"

func permuteUnique(nums []int) [][]int {
	sort.Ints(nums)
	result := [][]int{}
	helper(nums, []int{}, &result)
	return result
}

func helper(nums []int, cur []int, res *[][]int) {
	if len(nums) == 0 {
		*res = append(*res, cur)
		return
	}
	numsMap := map[int]byte{}
	for i := 0; i < len(nums); i++ {
		if numsMap[nums[i]] == 1 {
			continue
		}
		numsMap[nums[i]] = 1
		c := make([]int, len(cur))
		copy(c, cur)
		n := make([]int, len(nums))
		copy(n, nums)
		helper(append(n[:i], n[i+1:]...), append(c, nums[i]), res)
	}
}
