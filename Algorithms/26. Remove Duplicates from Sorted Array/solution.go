package problem26

func removeDuplicates(nums []int) int {
	length := 0
	for i := 0; i < len(nums); i++ {
		if i == 0 || nums[i] != nums[i-1] {
			nums[length] = nums[i]
			length++
		}
	}
	return length
}
