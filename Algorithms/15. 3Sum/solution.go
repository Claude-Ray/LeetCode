package three_sum

import (
	"sort"
)

func threeSum(nums []int) [][]int {
	var sums [][]int
	if len(nums) < 3 {
		return sums
	}
	sort.Ints(nums)
	for i := 0; i < len(nums)-2; i++ {
		if nums[i] > 0 {
			break
		}
		if i > 0 && nums[i] == nums[i-1] {
			continue
		}
		j := i + 1
		k := len(nums) - 1
		for j < k {
			if nums[i]+nums[j]+nums[k] > 0 {
				k--
			} else if nums[i]+nums[j]+nums[k] < 0 {
				j++
			} else {
				sums = append(sums, []int{nums[i], nums[j], nums[k]})
				for {
					j++
					if nums[j-1] != nums[j] || j >= k {
						break
					}
				}
				for {
					k--
					if nums[k+1] != nums[k] || j >= k {
						break
					}
				}
			}
		}
	}

	return sums
}
