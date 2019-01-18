package problem90

import "sort"

func subsetsWithDup(nums []int) [][]int {
	sort.Ints(nums)
	result := [][]int{{}}
	usedMap := map[int][][]int{}
	for i := 0; i < len(nums); i++ {
		if len(usedMap[nums[i]]) != 0 {
			newSet := [][]int{}
			length := len(usedMap[nums[i]])
			for j := 0; j < length; j++ {
				subset := push(usedMap[nums[i]][j], nums[i])
				result = append(result, subset)
				newSet = append(newSet, subset)
			}
			usedMap[nums[i]] = newSet
		} else {
			length := len(result)
			for j := 0; j < length; j++ {
				subset := push(result[j], nums[i])
				result = append(result, subset)
				usedMap[nums[i]] = append(usedMap[nums[i]], subset)
			}
		}
	}
	return result
}

func push(nums []int, num int) []int {
	c := make([]int, len(nums))
	copy(c, nums)
	return append(c, num)
}
