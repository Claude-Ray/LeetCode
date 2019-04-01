package problem31

import (
	"reflect"
	"testing"
)

func Test_nextPermutation(t *testing.T) {
	nums := [][]int{
		{1, 2, 3},
		{1, 5, 4, 3, 2},
	}
	results := [][]int{
		{1, 3, 2},
		{2, 1, 3, 4, 5},
	}
	for i := 0; i < len(results); i++ {
		nextPermutation(nums[i])
		if !reflect.DeepEqual(nums[i], results[i]) {
			t.Error("Case", i, "error:", nums[i])
		}
	}
}

// 1 2 3 4 5
// 1 2 3 5 4
// 1 2 4 3 5
// 1 2 4 5 3
// 1 2 5 4 3
// 1 3 2 4 5
// 1 3 2 5 4
// 1 3 4 2 5
// 1 3 4 5 2
// 1 3 5 2 4
// 1 3 5 4 2
// 1 4 2 3 5

// 1 5 4 3 2
// 2 1 3 4 5
