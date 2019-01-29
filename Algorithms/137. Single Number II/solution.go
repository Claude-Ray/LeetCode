package problem137

func singleNumber(nums []int) int {
	res := 0
	var i uint
	for ; i < 64; i++ {
		sum := 0
		for j := 0; j < len(nums); j++ {
			sum += nums[j] >> i & 1
		}
		res |= (sum % 3) << i
	}
	return res
}
